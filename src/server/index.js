/*
NodeJS Server File
Created: 2024-May-7
*/
// Code below from: https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
import express from "express";
import dotenv from "dotenv";

import db from "./model/database.js";

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

// API endpoint to load all jobs
app.get('/jobs', async (req, res) => {
    res.json(await db.loadJobs());
});

// API endpoint to load a single job by ID
// app.get('/jobs/:id', async (req, res) => {
//     try {
//         const job = await Job.findById(req.params.id);
//         if (!job) {
//             return res.status(404).json({ error: "Job not found" });
//         }
//         res.json(job);
//     } catch (error) {
//         console.error("Error loading job from the database:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });
// // app.get("/", (req, res) => {
//     res.send("<h2>Welcome!</h2> This site is the Star Nationals website API. To head back to our website <a href='https://starnationals-website.onrender.com'>click here</a>.");
// });

// app.get('/jobs', async (req, res) => {
//     try {
//         const jobs = await Job.find();
//         res.json(jobs);
//     } catch (error) {
//         console.error("Error loading jobs from the database:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// Citation block ends.
