// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// import { connectDB } from "./db/db.js";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import authRoutes from "./routes/auth.routes.js";
// import userRoutes from "./routes/user.routes.js";

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//   })
// );

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on : http://localhost:${PORT}`);
//   connectDB();
// });

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile("Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
