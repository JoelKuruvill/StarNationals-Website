/*
NodeJS Server File
Created: 2024-May-7
*/
// Code below created following tutorial from:
//  https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./model/database.js";

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

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

//Registration
app.get(`/users`, async (req, res) => {
    try {
        res.json(await db.loadUsers());
    }
    catch (error) {
        res.status(500);
    }
});
app.post(`/addUser`, async (req, res) => {
    const newUser = {
        _id: req.body._id,
        userName: req.body.userName,
        email: req.body.userEmail,
        password: req.body.userPassword,
    };
    console.log(newUser)
    try {
        const data = await db.registerUser(newUser);
        res.status(200).json(data);
      } 
      catch (error) {
        res.status(500).json(error);
      }
});

//Login
app.post(`/login`, async (req, res) => {
    try {
        const validateUser = {
          email: req.body.userEmail,
        };

        const data = await db.loginUser(validateUser);
    
        if (!data) {
          res.status(400).json({ message: "User not found" });
          return;
        }
    
        // const isPasswordValid = await bcrypt.compare(req.body.password, data.password);
    
        // if (!isPasswordValid) {
        //   res.status(401).json({ message: "Invalid Password" });
        //   return;
        // }
    
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json(error);
      }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// Citation block ends.
