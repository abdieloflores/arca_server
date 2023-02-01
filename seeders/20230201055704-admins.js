"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("admins", [
      {
        admin_role_id: 1,
        name: "Arca",
        first_lastname: "Proyect",
        second_lastname: "",
        username: "admin",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        email: "abdiel.oto@gmail.com",
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
