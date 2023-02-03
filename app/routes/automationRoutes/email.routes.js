module.exports = app => {

  const auth = require("../../middlewares/auth");

  const email = require("../../controllers/automationControllers/email.controller");

  let router = require("express").Router();

  router.post("/", auth, email.trigger);

  app.use("/automation/email/", router);

};