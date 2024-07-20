const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url, {
      dbName: "test",
    });
    console.log("Connected to the database");
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = connectDB;