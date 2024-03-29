"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("levels", [
      {
        name: "Inactivo",
        description: "Nivel cuando no tienes una membresía activa.",
        image: "",
        color: "#BDC3C7",
      },
      {
        name: "Activo",
        description: "Nivel cuando tienes una membresía activa.",
        image: "",
        color: "#2ECC71",
      },
      {
        name: "Bronce",
        description: "Avance de rango.",
        image: "",
        color: "#2ECC71",
      },
      {
        name: "Plata",
        description: "Avance de rango.",
        image: "",
        color: "#2ECC71",
      },
      {
        name: "Oro",
        description: "Avance de rango.",
        image: "",
        color: "#2ECC71",
      },
      {
        name: "Platino",
        description: "Avance de rango.",
        image: "",
        color: "#2ECC71",
      },
      {
        name: "Diamante",
        description: "Avance de rango.",
        image: "",
        color: "#2ECC71",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("levels", null, {});
  },
};
