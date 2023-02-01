module.exports = (app) => {
  const auth = require("../middlewares/auth");

  var router = require("express").Router();

  app.use("/", auth, router);
};
