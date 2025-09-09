const prisma = require("../config/prisma");
const renderError = require("../utils/renderError");

exports.createProfile = async (req, res, next) => {
  try {
    const { firstname, lastname } = req.body;
    const { id } = req.user;
    const email = req.user.emailAddresses[0].emailAddress;

    // const profile = await prisma.profile.create({
    //   data: {
    //     firstname,
    //     lastname,
    //     clerkId: id,
    //     email,
    //   },
    // });
    const profile = await prisma.profile.upsert({
      where: { clerkId: id },
      create: {
        firstname,
        lastname,
        email,
        clerkId: id,
      },
      update: {
        firstname,
        lastname,
        email,
      },
    });

    res.json({ result: profile, message: "creat profile" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
