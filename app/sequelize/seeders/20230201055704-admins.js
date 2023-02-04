"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins", [
      {
        admin_role_id: 1,
        name: "Admin",
        first_lastname: "Test",
        second_lastname: "",
        username: "admin",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        email: "admin@arcaproyect.com",
        phone: "0000000000",
        image: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        admin_role_id: 1,
        name: "Abdiel Otoniel",
        first_lastname: "Flores",
        second_lastname: "González",
        username: "otonielflores",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        email: "abdiel_flores@outlook.com",
        phone: "3323842026",
        image: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("admins", null, {});
  },
};
