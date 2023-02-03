module.exports = (app) => {
  const auth = require("../../middlewares/auth");
  const ctrl = require("../../controllers/mlm/users.controller");

  let router = require("express").Router();

  router.get("/", ctrl.findAll);
  router.get("/:id", ctrl.findOne);
  router.get("/:type/:id", ctrl.findAllByNode);
  router.post("/", ctrl.create);
  router.put("/:id", ctrl.update);
  router.delete("/:id", ctrl.delete);
  router.delete("/", ctrl.deleteAll);

  app.use("/users", auth, router);
};
