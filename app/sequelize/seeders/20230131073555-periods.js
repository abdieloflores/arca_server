"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("periods", [
      {
        name: "QUINCENA 1",
        start_date: "2023-01-01",
        final_date: "2023-01-15",
      },
      {
        name: "QUINCENA 2",
        start_date: "2023-01-16",
        final_date: "2023-01-31",
      },
      {
        name: "QUINCENA 3",
        start_date: "2023-02-01",
        final_date: "2023-02-15",
      },
      {
        name: "QUINCENA 4",
        start_date: "2023-02-16",
        final_date: "2023-02-28",
      },
      {
        name: "QUINCENA 5",
        start_date: "2023-03-01",
        final_date: "2023-03-15",
      },
      {
        name: "QUINCENA 6",
        start_date: "2023-03-16",
        final_date: "2023-03-31",
      },
      {
        name: "QUINCENA 7",
        start_date: "2023-04-01",
        final_date: "2023-04-15",
      },
      {
        name: "QUINCENA 8",
        start_date: "2023-04-16",
        final_date: "2023-04-30",
      },
      {
        name: "QUINCENA 9",
        start_date: "2023-05-01",
        final_date: "2023-05-15",
      },
      {
        name: "QUINCENA 10",
        start_date: "2023-05-16",
        final_date: "2023-05-31",
      },
      {
        name: "QUINCENA 11",
        start_date: "2023-06-01",
        final_date: "2023-06-15",
      },
      {
        name: "QUINCENA 12",
        start_date: "2023-06-16",
        final_date: "2023-06-30",
      },
      {
        name: "QUINCENA 13",
        start_date: "2023-07-01",
        final_date: "2023-07-15",
      },
      {
        name: "QUINCENA 14",
        start_date: "2023-07-16",
        final_date: "2023-07-31",
      },
      {
        name: "QUINCENA 15",
        start_date: "2023-08-01",
        final_date: "2023-08-15",
      },
      {
        name: "QUINCENA 16",
        start_date: "2023-08-16",
        final_date: "2023-08-31",
      },
      {
        name: "QUINCENA 17",
        start_date: "2023-09-01",
        final_date: "2023-09-15",
      },
      {
        name: "QUINCENA 18",
        start_date: "2023-09-16",
        final_date: "2023-09-30",
      },
      {
        name: "QUINCENA 19",
        start_date: "2023-10-01",
        final_date: "2023-10-15",
      },
      {
        name: "QUINCENA 20",
        start_date: "2023-10-16",
        final_date: "2023-10-31",
      },
      {
        name: "QUINCENA 21",
        start_date: "2023-11-01",
        final_date: "2023-11-15",
      },
      {
        name: "QUINCENA 22",
        start_date: "2023-11-16",
        final_date: "2023-11-30",
      },
      {
        name: "QUINCENA 23",
        start_date: "2023-12-01",
        final_date: "2023-12-15",
      },
      {
        name: "QUINCENA 24",
        start_date: "2023-12-16",
        final_date: "2023-12-31",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("periods", null, {});
  },
};
