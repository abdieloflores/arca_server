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
        name: "smtp_address",
        value: "smtp.gmail.com",
      },
      {
        name: "smtp_name",
        value: "Arca Proyect",
      },
      {
        name: "smtp_user",
        value: "notifications@arcaproyect.com",
      },
      {
        name: "smtp_password",
        value: "123456789",
      },
      {
        name: "smtp_tls",
        value: "587",
      },
      {
        name: "smtp_ssl",
        value: "465",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("settings", null, {});
  },
};
