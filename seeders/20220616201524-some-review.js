"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "Keith",
          text: "It was an amazing experience",
          date: "2022-06-27",
          activityId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Emma",
          text: "Highly recomended.My child loved this workshop. It was very interactive.",
          date: "2022-04-25",
          activityId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
