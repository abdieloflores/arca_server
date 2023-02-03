module.exports = (app) => {
  const auth = require("../../controllers/mlm/auth.controller");
  let router = require("express").Router();

  router.post("/user", auth.loginUserAuth);
  router.post("/admin", auth.loginAdminAuth);
  router.post("/register", auth.createUser);
  router.post("/access-token", auth.accessToken);
  router.post("/refresh-token", auth.refreshToken);
  router.post("/reset", auth.resetPassword);

  app.use("/auth", router);
};
