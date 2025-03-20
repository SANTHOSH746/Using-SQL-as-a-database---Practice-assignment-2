require('dotenv').config(); // Load environment variables

const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 5000;

// Create MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Default route
app.get('/', (req, res) => {
    res.send('Express Server with MySQL is running!');
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
