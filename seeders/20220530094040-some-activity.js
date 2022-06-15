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
          location: "Kapelweg 35, Den Haag",
          price: 0,
          imageUrl:
            "https://images.unsplash.com/photo-1578178233034-33258dacb4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
          email: "Emma@gmail.com",
          phone: "+31 6 75443275",
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
          location: "Naritaweg 105, Amsterdam",
          price: 25,
          imageUrl:
            "https://images.unsplash.com/photo-1540593463874-59835505e99d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
          email: "Daniella@gmail.com",
          phone: "+31 0 65744677",
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
          location: "Hoogstraat 110, Rotterdam",
          price: 15,
          imageUrl:
            "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80",
          email: "storrytellingrotterdam@gmail.com",
          phone: "+31 6 07546745",
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
          location: "Museumplein 6, Amsterdam",
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

        {
          title: "Eden and the Golden Rule",
          description:
            " Eden and the Golden Rule is a VR experience for young and old, for anyone who wants to look at the world through Virtual Reality glasses. Experience it in the Jewish Historical Museum in Amsterdam!",
          location: "Nieuwe Amstelstraat 1, Amsterdam",
          price: 35,
          imageUrl:
            "https://cms.jck.nl/sites/default/files/2021-07/header2.png",
          email: "service@jck.nl",
          phone: "+31 6 20531031",
          date: "2022-08-24",
          ageRange: "all-ages",
          longitude: 4.90391,
          latitude: 52.36737,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Duinrell Amusement Park (Wassenaar)",
          description:
            " The amusement park offers the opportunity to spend the night. There is the possibility to camp or to move in bungalows. The price includes a visit to the amusement park and daily 1-2 hours to the Tiki Pool.",
          location: "Duinrell 1, Wassenaar",
          price: 35,
          imageUrl:
            "https://www.holland.com/upload_mm/5/d/c/74689_fullimage_duinrell%20kikkerachtbaan_1360x430_0.jpg",
          email: "info@duinrell.nl",
          phone: "+31 (0) 70 5155 255",
          date: "2022-08-29",
          ageRange: "all-ages",
          longitude: 4.38716,
          latitude: 52.14608,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Crafts workshop for kids",
          description:
            "Dear parents, I am teaching crafts for children aged 6 to 12 years. We learn to work with different natural materials to create shapes, souveniers, statues, etc. Groups can be up to 10. Adults can also join to enjoy time and creation with the children. I have been teaching this for 7 years and enjoy the company of young ones. Sessions can be held in English and/or Spanish. Feel free to contact me for private sessions, birthday parties, outings. Regards, Ana.",
          location: "Heidelberglaan 8, Utrecht",
          price: 45,
          imageUrl:
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          email: "craftsforkids@gmail.com",
          phone: "+31 (0) 60 4532 876",
          date: "2022-06-27",
          ageRange: "school-age",
          longitude: 5.17545,
          latitude: 52.08518,
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
