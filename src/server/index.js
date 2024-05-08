/*
NodeJS Server File
Created: 2024-May-7
*/
// Code below from: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
const express = require("express");
const dotenv = require("dotenv").config();
const database = require("./model/database");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// app.use("/jobs", (req, res) => {
//     res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// Citation block ends.
