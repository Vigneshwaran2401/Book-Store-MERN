import express from "express";
import { PORT, mongoDBURI } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import bookroute from "./routes/bookRoute.js";

const app = express();

// middleware for parsing json

app.use(express.json());

// Middleware for handling CORS policy
// 1. Allow all the origins with default of cors(*)
app.use(cors());
// 2. use custom origins
// app.use(
//   cors({
//     origin: "http:localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN stack");
});

app.use("/books", bookroute);

mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
