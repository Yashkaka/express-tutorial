import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import authRoute from "./routes/auth.js";
// import usersRoute from "./routes/users.js";
// import hotelsRoute from "./routes/hotels.js";
// import roomsRoute from "./routes/rooms.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://yash:yash@cluster0.8lyiexb.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
