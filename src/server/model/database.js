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
  
  let jobsList = []; //Variable to be returned with res.
  if (idValue !== undefined) {
    jobsList = jobsCollection.find({ _id: idValue }); //For specific job ID
  } else {
    jobsList = jobsCollection.find({}); //For all jobs
  }
  return jobsList.toArray();
}

async function loadUsers(idValue) {
  const client = new MongoClient(mainURI);
  const database = client.db("userData");
  const usersCollection = database.collection("userData_Credentials");
  
  let usersList = []; //Variable to be returned with res.
  if (idValue !== undefined) {
    usersList = usersCollection.find({ _id: idValue }); //For specific job ID
  } else {
    usersList = usersCollection.find({}); //For all jobs
  }
  return usersList.toArray();
}

async function registerUser(data) {
    try {
      const client = new MongoClient(mainURI);
      await client.connect();
  
      // calling the db and the collection
      const db = client.db("userData");
      const collection = db.collection("userData_Credentials");
  
      const addUser = await collection.insertOne(data);
      await client.close();  
      return addUser;

    } catch (error) {
      return error;
    }
};

const loginUser = async (data) => {
  try {
    const client = new MongoClient(mainURI);
    await client.connect();

    // calling the db and the collection
    const db = client.db("userData");
    const collection = db.collection("userData_Credentials");

    const user = await collection.findOne(data);
    await client.close();

    return user;
  }
  catch (error) {
    return error;
  }
};

export default {
  mainDB,
  jovianDB,
  loadJobs,
  loadUsers,
  registerUser,
  loginUser
};