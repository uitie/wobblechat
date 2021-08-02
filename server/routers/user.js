const { Router } = require("express");
const userController = require("../controllers/user");
const cookieController = require("../controllers/cookie");

const userRouter = Router();

userRouter.post(
  "/signup",
  userController.createUser,
  cookieController.setCookies,
  (_req, res) => {
    res.status(200).send({ id: res.locals.id });
  }
);

userRouter.post(
  "/signin",
  userController.signInUser,
  cookieController.setCookies,
  (_req, res) => {
    res.status(200).send({ id: res.locals.id });
  }
);

// Eliminates cookie and sends user back to home page.
userRouter.post("/signout", cookieController.unsetCookies, (_req, res) => {
  res.status(200).redirect("/");
});

module.exports = userRouter;