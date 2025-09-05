const renderError = require("../utils/renderErroo");

exports.createProfile = (req, res, next) => {
  try {
    if (true) {
      return renderError(400, "Token");
    }

    console.log("create profile");
    res.json({ message: "creat profile" });
  } catch (err) {
    next(err);
  }
};
