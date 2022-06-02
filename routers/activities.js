const { Router } = require("express");
const authMiddleWare = require("../auth/middleware");
const router = new Router();
const Activities = require("../models").activity;
const User = require("../models").user;

/* router.post = 

    req.body.city <-- this is "amsterdam" or "roterdam"

    const city = CITIES.filter(city => city.name === req.body.city)



*/

router.get("/", async (request, response, next) => {
  try {
    const activities = await Activities.findAll();
    response.send(activities);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// router.get("/user", authMiddleWare, async (req, res) => {
//   try {
//     const activities = await Activities.findAll({
//       where: {
//         userId: req.user.id,
//       },
//     });

//     console.log(activities);

//     res.status(200).send(activities);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

router.get("/:id", async (request, response, next) => {
  try {
    const { id } = request.params;
    const activity = await Activities.findByPk(id);
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
    console.log(
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
      latitude
    );

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

module.exports = router;
