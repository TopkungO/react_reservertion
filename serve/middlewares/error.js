const handleError = (err, req, res, next) => {
  res
    .status(err.statuscode || 500)
    .json({ message: err.message || "Someting Wrong!!" });
};
 module.exports = handleError