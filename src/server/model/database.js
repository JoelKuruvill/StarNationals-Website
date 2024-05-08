/*
MongoDB Connection File
Created: 2024-May-7
*/
const mongoose = require("mongoose");
const mainURI = process.env.MONGODB_URI;
const jovianURI = process.env.JOVIAN_URI;

try {
  const mainDB = mongoose.connect(mainURI);
  console.log("CONNECTED to main server");
}
catch (err) {
  console.error("ERROR:", err);
}

try {
  const jovianDB = mongoose.createConnection(jovianURI);
  console.log("CONNECTED to Jovian project server");
}
catch (err) {
  console.error("ERROR:", err);
}
