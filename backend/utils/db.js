const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connection successful");
  } catch (error) {
    console.log("Something went wrog when connecting to the database.");
  }
};

module.exports = connectDb;
