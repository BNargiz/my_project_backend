const { Router } = require("express");

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
module.exports = router;
