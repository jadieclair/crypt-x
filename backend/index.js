import express from "express";
import mysql from "mysql2";
import jwt from "jsonwebtoken";

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

// Define a route for user registration
app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  // Insert the user into the database (replace with your actual SQL query)
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

  // Authenticate the user (replace with your authentication logic)
  // For simplicity, assume the user is valid and generate a JWT token
  const user = { email }; // You can customize this object with user data
  const token = jwt.sign(user, "your-secret-key", { expiresIn: "1h" });

  res.json({ token });
});

// Define a route to fetch and display user data
app.get("/api/users", (req, res) => {
  const sql = "SELECT * FROM users"; // Replace with your actual SQL query

  // Execute the SQL query
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results); // Send the query results as a JSON response
    }
  });
});

// Start the server
app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
