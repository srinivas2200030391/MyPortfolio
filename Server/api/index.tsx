import express from "express";
import cors from "cors";
import mongoose from "mongoose";
//import page from "./routes/page.tsx";
const app = express();
app.use(express.json());
app.use(cors());

// mongoose
//   .connect("mongodb://localhost:27017/MyPortfolio")
//   .then(() => {
//     console.log("Connected ");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//app.use("/user", page);
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(2017, () => {
  console.log("Server running at port 2017");
});
