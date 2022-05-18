const express = require("express");
const { default: mongoose } = require("mongoose");
const articleRouter = require("./routes/articleRouter");
const sortieRouter = require("./routes/sortieRouter");
const userRouter = require("./routes/userRouter");

const app = express();

console.log(process.env.MONGODB_URL);

//Connection to MONGODB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log(error));

app.use(express.json());

//BYPASS CORS SECURITY
app.use((req, res, next) => {
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

app.use("/api/article", articleRouter);
app.use("/api/sortie", sortieRouter);
app.use("/api/auth", userRouter);

module.exports = app;
