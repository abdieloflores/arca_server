"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("payment_methods", [
      {
        name: "Efectivo",
      },
      {
        name: "Depósito",
      },
      {
        name: "Transferencia",
      },
      {
        name: "Tarjeta",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payment_methods", null, {});
  },
};
