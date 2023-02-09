const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./utils/db");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");
const app = express();

//Connect to db
connectDb();

//Middleware calls
app.use(cors());
app.use(morgan("dev"));

//App Routes
// app.use("api/v1",)

app.listen(process.env.PORT, () => {
  console.log(`Connected via port ${PORT}`);
});
