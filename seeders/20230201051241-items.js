"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("items", [
      {
        name: "Membresía 200",
        description: "Acceso a toda la plataforma ARCA",
        image: "",
        price: "200",
        points: "20",
        discount: "0",
        tax: "0",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("items", null, {});
  },
};
