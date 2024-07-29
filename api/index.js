import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
const PORT_NO = 6666;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database successfull");
  })
  .catch((error) => {
    console.log("Error in connecting to database", error);
  });

app.listen(PORT_NO, () => console.log(`Listening to Port No ${PORT_NO}`));
