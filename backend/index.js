// server.js
import express from "express";
import mysql from "mysql2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Create a MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tionne02!",
  database: "users",
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database!");
  }
});

// Utility function to check if the user with a given email already exists
const checkIfUserExists = async (email) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT COUNT(*) as count FROM users WHERE email = ?";
    db.query(sql, [email], (err, results) => {
      if (err) {
        console.error("Error checking user existence:", err);
        reject(err);
      } else {
        const count = results[0].count;
        resolve(count > 0);
      }
    });
  });
};

// Defines a route for user registration
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user with the given email already exists
  const userExists = await checkIfUserExists(email);
  if (userExists) {
    return res.status(400).json({
      error: "Email is already registered",
      message: "This email address is already associated with an existing account. Please use a different email address to register.",
    });
  }

  // Hash the password before storing it in the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // Inserts the user into the database
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, hashedPassword], (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      // Generate JWT token
      const token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRATION || "1h" });

      // Include the token in the response
      res.json({ message: "User registered successfully", token });
    }
  });
});

// Route to check if a user with a given email already exists
app.get("/api/checkUser", async (req, res) => {
  const { email } = req.query;
  const userExists = await checkIfUserExists(email);
  res.json({ exists: userExists });
});

// Defines a route for user login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Authenticates the user
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Error executing login query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        // Compare the hashed password
        const user = results[0];
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
          // User is valid, generate a JWT token
          const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: process.env.TOKEN_EXPIRATION || "1h" });

          res.json({ token });
        } else {
          res.status(401).json({ error: "Invalid credentials" });
        }
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  });
});

// Starts the server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
