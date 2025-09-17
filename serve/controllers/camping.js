const prisma = require("../config/prisma");

exports.listCamping = async (req, res) => {
  try {
    const { id } = req.params;
    const camping = await prisma.landmark.findFirst({
      where: {
        id:Number(id)
      },
    });
    res.json({ result: camping });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
exports.readCamping = async (req, res) => {
  try {
    const camping = await prisma.landmark.findMany();
    res.json({ result: camping });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "server Error" });
  }
};
exports.createCamping = async (req, res) => {
  try {
    const { id } = req.user;
    const { title, description, price, category, lat, lng ,image} = req.body;
    console.log(image);
    
    const camping = await prisma.landmark.create({
      data: {
        title,
        description,
        price,
        category,
        lat,
        lng,
        public_id:image.public_id,
        secure_url:image.secure_url,
        profileId: id,
      },
    });

    res.json({ message: "Create Camping Success!!!", result: camping });
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
