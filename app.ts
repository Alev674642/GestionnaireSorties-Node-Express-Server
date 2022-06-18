const express = require("express");
const { default: mongoose } = require("mongoose");
const sortieRouter = require("./routes/sortieRouter");
const userRouter = require("./routes/userRouter");
import {Request, Response, NextFunction} from "express"

const app = express();

console.log(process.env.MONGODB_URL);

//Connection to MONGODB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error:any) => console.log(error));

app.use(express.json());

//BYPASS CORS SECURITY
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/sortie", sortieRouter);
app.use("/api/auth", userRouter);

module.exports = app;

export {};