module.exports = (app) => {
  const auth = require("../middlewares/auth");

  let router = require("express").Router();

  app.use("/", auth, router);
};
