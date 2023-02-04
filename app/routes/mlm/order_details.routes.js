module.exports = (app) => {
  const auth = require("../../middlewares/auth");
  const ctrl = require("../../controllers/mlm/order_details.controller");

  let router = require("express").Router();

  router.get("/", ctrl.findAll);
  router.get("/:order", ctrl.findByOrder);
  router.get("/:order/:item", ctrl.findByOrderItem);
  router.post("/", ctrl.create);
  router.put("/:order/:item", ctrl.update);
  router.delete("/:order/:item", ctrl.delete);
  router.delete("/", ctrl.deleteAll);

  app.use("/order_details", auth, router);
};
