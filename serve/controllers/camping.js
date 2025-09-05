exports.listCamping = (req, res) => {
  try {
    res.send("controller");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
exports.readCamping = (req, res) => {
  try {
    res.send("read");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
exports.createCamping = (req, res) => {
  try {
    res.send("create");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
exports.updateCamping = (req, res) => {
  try {
    res.send("updateCamping");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
exports.deleteCamping = (req, res) => {
  try {
    res.send("deleteCamping");
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
