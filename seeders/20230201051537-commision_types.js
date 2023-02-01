"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("commission_types", [
      {
        name: "Inscripciones",
      },
      {
        name: "Unilevel",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("commission_types", null, {});
  },
};
