// server.js
const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect(config.database.connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(config.port, () => {
            console.log(`Server running on http://localhost:${config.port}`);
        });
    })
    .catch((error) => console.error("Error connecting to MongoDB:", error));
