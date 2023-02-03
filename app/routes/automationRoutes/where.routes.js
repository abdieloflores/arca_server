module.exports = (app) => {
  const auth = require("../../middlewares/auth");
  const where = require("../../controllers/automationControllers/where.controller");

  let router = require("express").Router();

  router.post("/:document/and", where.findAnd);

  router.post("/:document/or", where.findOr);

  app.use("/automation/where/", auth, router);
};
