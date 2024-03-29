module.exports = (app) => {
  const auth = require("../../controllers/automationControllers/auth.controller");

  let router = require("express").Router();

  router.post("/:document", auth.loginAuth);
  router.post("/register/:document", auth.createAuth);
  router.post("/access-token/:document", auth.accessToken);
  router.post("/refresh-token/:document", auth.refreshToken);
  router.post("/code/:document", auth.sendResetCodeInEmail);
  router.post("/reset/:document", auth.resetPassword);
  router.post("/phone/:document", auth.createAuthWithPhone);
  router.post("/phone/verify/:document", auth.createAuthWithPhoneVerify);

  app.use("/automation/auth", router);
};
