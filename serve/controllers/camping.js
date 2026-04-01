const prisma = require("../config/prisma");

exports.listCamping = async (req, res, next) => {
  try {
    const { id } = req.params;
    const camping = await prisma.landmark.findFirst({
      where: {
        id: Number(id),
      },
    });
    res.json({ result: camping });
  } catch (err) {
    next(err);
  }
};
exports.readCamping = async (req, res, next) => {
  try {
    const camping = await prisma.landmark.findMany();
    res.json({ result: camping });
  } catch (err) {
    next(err);
  }
};
exports.createCamping = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, description, price, category, lat, lng, image } = req.body;
    console.log(image);

    const camping = await prisma.landmark.create({
      data: {
        title,
        description,
        price,
        category,
        lat,
        lng,
        public_id: image.public_id,
        secure_url: image.secure_url,
        profileId: id,
      },
    });

    res.json({ message: "Create Camping Success!!!", result: camping });
  } catch (err) {
    next(err);
  }
};
exports.updateCamping = (req, res, next) => {
  try {
    res.send("updateCamping");
  } catch (err) {
    next(err);
  }
};
exports.deleteCamping = (req, res, next) => {
  try {
    res.send("deleteCamping");
  } catch (err) {
    next(err);
  }
};
