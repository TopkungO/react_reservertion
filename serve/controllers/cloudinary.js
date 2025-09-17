const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NMAE,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.createImage = async (req, res, next) => {
  try {
    console.log(req.body);
    const { image } = req.body;
    const result = await cloudinary.uploader.upload(image, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "landmark",
    });
    res.json({ result: result, message: "upload success" });
  } catch (err) {
    next(err);
  }
};
