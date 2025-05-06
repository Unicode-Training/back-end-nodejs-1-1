const express = require("express");
const app = express();
const routerIndex = require("./routes/index");
// const authMiddleware = require("./middlewares/auth.middleware");
app.use(express.json()); //middleware parse body
app.use(express.urlencoded()); //urlencoded

app.use(express.static("public"));

// app.use(authMiddleware);
app.use("/api", routerIndex);

//Error handing
const notFoundErrorHandling = (req, res, next) => {
  return res.status(404).json({ message: "Not Found" });
};
app.use(notFoundErrorHandling);

const errorHandling = (err, req, res, next) => {
  const errorObj = { message: err.message };
  if (err.errors) {
    errorObj.errors = err.errors;
  }
  return res.status(err.status || 500).json(errorObj);
};
app.use(errorHandling);

module.exports = app;
