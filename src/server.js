// src/server.js
const express = require('express');
const routes = require('./routes/routes');
const DatabaseClient = require('./models/DatabaseClient');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    DatabaseClient; // Initialize database connection
});
