const { Router } = require("express");
const authMiddleWare = require("../auth/middleware");
const router = new Router();
const Activities = require("../models").activity;

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
module.exports = router;
