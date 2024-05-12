/*
MongoDB Connection File
Created: 2024-May-7
*/
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// import model from "./model.js";

dotenv.config();

const mainURI = process.env.MONGODB_URI;
const jovianURI = process.env.JOVIAN_URI;

let jovianDB_Connection = false;

function mainDB() {
  const mainDB_Connection = new MongoClient(mainURI);
  if (mainDB_Connection) {
      console.log("CONNECTED to main server");
  } else {
    console.error("ERROR connecting this projects DB");
  }
}

async function jovianDB() {
  // Must use driver cause colection uses uppercase: https://stackoverflow.com/questions/71842510/mongoose-query-always-returns-empty-array
  jovianDB_Connection = new MongoClient(jovianURI);
  if (jovianDB_Connection) {
      console.log("CONNECTED to Jovian project server");
      jovianDB_Connection.close();
  } else {
      console.error("ERROR connecting to Jovian Project DB");
      jovianDB_Connection.close();
  }
}

async function loadJobs(idValue) {
  const client = new MongoClient(jovianURI);
  const database = client.db("DB-Web-App");
  const jobsCollection = database.collection("webAppJobs");
  
  let jobsList; //Variable to be returned with res.
  if (idValue !== undefined) {
    jobsList = await jobsCollection.find({_id: idValue}).toArray(); //For specific job ID
  } else {
    jobsList = await jobsCollection.find({}).toArray(); //For all jobs
  }
  return jobsList;
}

export default {
  mainDB,
  jovianDB,
  loadJobs
};