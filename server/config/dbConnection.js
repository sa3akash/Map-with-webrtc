const { MONGO_URL } = require(".");
const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose.connect(MONGO_URL);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("DB connected...");
  });
};


module.exports = dbConnection;