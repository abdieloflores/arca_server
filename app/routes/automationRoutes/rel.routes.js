module.exports = app => {
  const auth = require("../../middlewares/auth");
  const rel = require("../../controllers/automationControllers/rel.controller");

  let router = require("express").Router();

  router.get("/:document/:document2/", rel.findAll);

  router.get("/:document/:document2/:id", rel.findOne);

  app.use('/automation/rel/', auth, router);
};
