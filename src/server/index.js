/*
NodeJS Server File
Created: 2024-May-7
*/
// Code below created following tutorial from:
//  https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
import express from "express";
import dotenv from "dotenv";

import db from "./model/database.js";

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h2>Welcome!</h2> This site is the Star Nationals website API. To head back to our website <a href='https://starnationals-website.onrender.com'>click here</a>.");
});

// Converted code from Jovian Project
// API endpoint to load all jobs
app.get('/jobs', async (req, res) => {
    try {
        res.json(await db.loadJobs());
    }
    catch (error) {
        res.status(500);
    }
});

// API endpoint to load a single job by ID
app.get('/jobs/:id', async (req, res) => {
    try {
        res.json(await db.loadJobs(req.params.id));
    }
    catch (error) {
        res.status(500);
    }
});
// End of Jovian Project API endpoints.



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// Citation block ends.
