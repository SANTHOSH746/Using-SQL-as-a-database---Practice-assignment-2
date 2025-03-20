# Express Server with MySQL Connection Using Environment Variables

## Project Setup

### 1. Initialize the Node.js Project
Run the following command to create a new Node.js project:
```sh
npm init -y
```

### 2. Install Required Dependencies
```sh
npm install express mysql2 dotenv
```

### 3. Create a `.env` File
Create a `.env` file in the root directory and add your MySQL database credentials:
```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=library_db
```

### 4. Create `server.js`
Create a `server.js` file and set up the Express server along with the MySQL connection:
```javascript
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL Database');
});

app.get('/', (req, res) => {
  res.send('Express Server with MySQL Connection!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 5. Run the Server
To start the server, use the following command:
```sh
node server.js
```

If using watch mode:
```sh
node --watch server.js
```

