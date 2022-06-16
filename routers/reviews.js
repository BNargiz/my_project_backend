const { Router } = require("express");
const router = new Router();
const authMiddleware = require("../auth/middleware");
const Reviews = require("../models").review;
const Activity = require("../models").activity;
router.post("/:id", authMiddleware, async (request, response, next) => {
  try {
    const { name, text, date } = request.body;
    const { id } = request.params;
    if (!text) {
      return response.status(400).send("Please provide text");
    }

    const activity = await Activity.findByPk(id);

    const newReview = await Reviews.create({
      name,
      text,
      date,
      activityId: activity.id,
    });

    response.status(200).send(newReview);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
module.exports = router;
