"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("settings", [
      {
        name: "point_value",
        value: "10",
      },
      {
        name: "unilevel_levels",
        value: "3",
      },
      {
        name: "unilevel_percentages",
        value: "[0.3, 0.3, 0.3]",
      },
      {
        name: "enrollment_levels",
        value: "3",
      },
      {
        name: "enrollment_percentages",
        value: "[0.3, 0.3, 0.3]",
      },
      {
        name: "web_site",
        value: "https://www.arcaproyect.com/",
      },
      {
        name: "whatsapp",
        value: "+526142133814",
      },
      {
        name: "phone",
        value: "3319751234",
      },
      {
        name: "email",
        value: "atencion@arcaproyect.com",
      },
      {
        name: "smtp",
        value: `{
          "server_address": "smtp.gmail.com",
          "name": "Arca Proyect",
          "username": "notifications@arcaproyect.com",
          "password": "123456789",
          "type": "tls",
          "tls": "587",
          "ssl": "465",
        }`,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("settings", null, {});
  },
};
