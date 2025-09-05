exports.authCheck = (req, res, next) => {
  try {
    console.log("middleware");
    if (true) {
      next();
    } else {
      res.status(401).json({ message: "No access Denied !!" });
    }
  } catch (err) {
    res.status(500).json({ message: "server Error" });
  }
};
