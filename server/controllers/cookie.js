const cookieController = {};

// Set cookie on user (of their ID) upon successful sign up or sign in.
cookieController.setCookies = (_req, res, next) => {
  try {
    const { id } = res.locals;
    res.cookie("ssid", id, {
      expires: new Date(Date.now() + 1200000),
      httpOnly: true,
    });

    res.cookie("loggedIn", true, {
      expires: new Date(Date.now() + 1200000),
      httpOnly: false,
    });

    return next();
  } catch (err) {
    return next({
      status: 500,
      message: err.message,
    });
  }
};

// Unset cookies on logout
cookieController.unsetCookies = (_req, res, next) => {
  res.cookie("ssid", "", { maxAge: 0 });
  res.cookie("loggedIn", false, { maxAge: 0 });
  return next();
};

module.exports = cookieController;
