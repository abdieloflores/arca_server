module.exports = (app) => {
  const auth = require("../../middlewares/auth");
  const ctrl = require("../../controllers/mlm/levels.controller");

  let router = require("express").Router();

  router.get("/", ctrl.findAll);
  router.get("/:id", ctrl.findOne);
  router.post("/", ctrl.create);
  router.put("/:id", ctrl.update);
  router.delete("/:id", ctrl.delete);
  router.delete("/", ctrl.deleteAll);

  app.use("/levels", auth, router);
};
