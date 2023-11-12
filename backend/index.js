import express from "express";
import mysql from "mysql2";
import jwt from "jsonwebtoken";
import crypto from "crypto";

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

// Defines a route for user registration
app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  // Inserts the user into the database
  const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "User registered successfully" });
    }
  });
});

// Defines a route for user login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Authenticates the user
  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Error executing login query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (results.length > 0) {
        // User is valid, generate a JWT token
        const user = { email }; // You can customize this object with user data
        const secretKey = "your-secret-key"; // Replace with your actual secret key
        const token = jwt.sign(user, secretKey, { expiresIn: "1h" });

        res.json({ token });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    }
  });
});

// Defines a route to fetch and display user data
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users"; // Replace with your actual SQL query

  // Execute the SQL query
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results); // Sends the query results as a JSON response
    }
  });
});

// Starts the server
app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
