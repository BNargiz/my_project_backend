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
      "activities",
      [
        {
          title: "Play Mates",
          description:
            "Hello Mamas! I am a first time mummy, my daughter Sarah is almost 8months and we are looking for some play mates! For me the best would be Wednesday mornings from 10am at Westbroek park. Open to any other day/time/place meet up suggestions! If anyone would appreciate this too message me your number and I could make a WhatsApp group so we could meet weekly.",
          location: "Den Haag",
          price: 0,
          imageUrl: "https://pbs.twimg.com/media/EGikEvXWwAETx7z.jpg",
          email: "Emma@gmail.com",
          phone: "67544327",
          date: "2022-06-27",
          ageRange: "infant",
          longitude: 4.30164,
          latitude: 52.103668,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Introductory Music & Piano Lessons",
          description:
            "Do you want to play an instrument? Are you looking for music/piano lessons for your kids? Then I am what you are looking for! I received my Master's Degree in Music in Utrecht Conservatory and continued with a 2nd master degree from Fontys Academy of Music and Performing Arts Tilburg.I teach fundamental musical skills through training and exercises with games on rhythm, pitch, melody recognition and development, musical memory, reading notes, instrument knowledge, and dynamics.There is no age limit nor any restrictions. The lesson plan will be tailored to the student's age, needs and current knowledge. All the resources and fundamentals will be built step by step.If you are interested, please do not hesitate and send me a private message.",
          location: "Amsterdam",
          price: 25,
          imageUrl:
            "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Kids/Articles/piano-lessons.jpg",
          email: "Daniella@gmail.com",
          phone: "65744677",
          date: "2022-07-30",
          ageRange: "school-age",
          longitude: 4.88004,
          latitude: 52.34932,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "Storytellings for children",
          description:
            "Hello mamas,The coming Wednesday Aug 10 InterKids The Rotterdam will host 3 storytellings for children in English, Spanish and Russian. Check our page for more details.",
          location: "Rotterdam",
          price: 15,
          imageUrl:
            "https://t3.ftcdn.net/jpg/02/19/29/12/360_F_219291246_jRkr7yehZAs0XP2RJS8uxgf5ezsJyydY.jpg",
          email: "storrytellingrotterdam@gmail.com",
          phone: "60754674",
          date: "2022-08-10",
          ageRange: "pre-schooler",
          longitude: 4.48902,
          latitude: 51.921322,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: "De Parade Theatre Festival",
          description:
            " In the summer of 2022, the Parade, the travelling theatre festival with its colourful tents, terraces and restaurants, hopes to return to the Martin Luther King Park and to set up its tents again in the Amsterdam. Theatre and fun for summer evenings.At De Parade there really is something for everyone. Whether you’re a die-hard theatre devotee or just along for the ride, you’ll find it here no matter what your pleasure is. Once on the festival terrain, you’ll find yourself enticed by artists giving outdoor performances in full regalia. The festival offers visitors a variety of short and full-length performances, as well as performances in open-air and secret locations. There’s always something new and surprising to look out for!",
          location: "Amsterdam",
          price: 0,
          imageUrl:
            "https://www.rotterdamfestivals.nl/uploads/2017/05/erik_van_t_hof_parade_rotterdam_dsc8935.jpg_2014_61308.png",
          email: "https://deparade.nl/",
          phone: "+31(0)202386393",
          date: "2022-06-26",
          ageRange: "all-ages",
          longitude: 4.895168,
          latitude: 52.370216,
          userId: 1,
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
    await queryInterface.bulkDelete("activities", null, {});
  },
};
