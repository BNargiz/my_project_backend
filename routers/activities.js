const { Router } = require("express");
const authMiddleWare = require("../auth/middleware");
const router = new Router();
const Activities = require("../models").activity;
const User = require("../models").user;
const Reviews = require("../models").review;

router.get("/", async (request, response, next) => {
  try {
    const activities = await Activities.findAll();
    response.send(activities);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const activity = await Activities.findByPk(id, { include: Reviews });
    response.send(activity);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete("/delete/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const activity = await Activities.findByPk(id);
    const destroyedActivity = await activity.destroy();
    response.send({ message: "Activity deleted", destroyedActivity });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post("/:id/post", authMiddleWare, async (request, response, next) => {
  try {
    console.log("hello");
    const user = request.user;
    const {
      title,
      description,
      location,
      price,
      image,
      email,
      phone,
      date,
      age,
      longitude,
      latitude,
    } = request.body;

    if (
      !title ||
      !description ||
      !image ||
      !location ||
      !email ||
      !phone ||
      !date ||
      !age
    ) {
      return response.status(400).send("Please provide all information");
    }
    // const { id } = request.params;
    // const user = await User.findByPk(id);

    const newActivity = await Activities.create({
      title,
      description,
      location,
      price: 0,
      imageUrl: image,
      email,
      phone,
      date,
      ageRange: age,
      longitude,
      latitude,
      userId: user.id,
    });

    response.status(200).send(newActivity);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
});
router.patch("/modify/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Activities.findByPk(id);

    const {
      title,
      description,
      location,
      price,
      imageUrl,
      email,
      phone,
      date,
      ageRange,
      longitude,
      latitude,
    } = req.body;
    console.log("------------------", req.body);

    const modifiedActivity = await post.update({
      title,
      description,
      location,
      price,
      imageUrl,
      email,
      phone,
      date,
      ageRange,
      longitude,
      latitude,
    });

    res.status(200).send(modifiedActivity);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
