/*
MongoDB Connection File
Created: 2024-May-7
*/
const mongoose = require("mongoose");
const mainURI = process.env.MONGODB_URI;
const jovianURI = process.env.JOVIAN_URI;

mongoose.connect(mainURI)
  .then(() => {
    console.log("CONNECTED to main server");
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });

mongoose.connect(jovianURI)
  .then(() => {
    console.log("CONNECTED to Jovian project server");
  })
  .catch((err) => {
    console.error("ERROR:", err);
  });
