const express = require("express");
const app = express();
const port = 4000;

const db = require("./models");

db.sequelize.sync({alter: true}).then((req) => {
  app.listen(port, () => {
    console.log("server running");
  });
});
