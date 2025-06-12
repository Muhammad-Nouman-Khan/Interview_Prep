import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen("5000", () => {
  console.log(`Server is listening on : http://localhost:${PORT}`);
  connectDB();
});
