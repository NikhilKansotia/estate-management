import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";
const app = express();

dotenv.config();

const PORT_NO = process.env.PORT_NO || 7778;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to Database successfull");
  })
  .catch((error) => {
    console.log("Error in connecting to database", error);
  });

//middlewares
app.use(express.json());

//test api
app.get("/test", (req, res) => {
  res.send("Hello World");
});
//api rotues
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT_NO, () => console.log(`Listening to Port No ${PORT_NO}`));
