module.exports = (app) => {
  const auth = require("../../middlewares/auth");
  const ctrl = require("../../controllers/mlm/user_levels.controller");

  let router = require("express").Router();

  router.get("/", ctrl.findAll);
  router.get("/:user", ctrl.findByUser);
  router.get("/:user/:period", ctrl.findByUserPeriod);
  router.post("/", ctrl.create);
  router.put("/:user/:period", ctrl.update);
  router.delete("/:user/:period", ctrl.delete);
  router.delete("/", ctrl.deleteAll);

  app.use("/user_levels", auth, router);
};
