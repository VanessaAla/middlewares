const express = require("express");
const app = express();
const port = 3000;

//Create a middleware function with the name loggingMiddleware:

function loggingMiddleware(req, res, next) {
  const currentTime = new Date();
  console.log(`Request received at: ${currentTime}`);
  res.setHeader("X-Codaisseur-Time", currentTime);
  next();
}

//Make a middleware function called failRandomlyMiddleware:
function failRandomlyMiddleware(req, res, next) {
  //console.log(Math.random() * 10);
  if (Math.random() * 10 < 4) {
    next();
  } else {
    res.status(500).end();
  }
}

//app.get("/", (req, res) => res.send("Hello"));
app.get("/", failRandomlyMiddleware, (req, res) => res.send("Hello"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
