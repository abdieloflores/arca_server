"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "OMAR ULISES FLORES GONZALEZ",
        first_lastname: "-",
        sponsor: 0,
        placement: 0,
        username: "Ulyflores",
        email: "admin@admin.com",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "OMAR ROGELIO FLORES CORRAL",
        first_lastname: "-",
        sponsor: 1,
        placement: 1,
        username: "Roger67",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3319706080",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ROCIO DE JESUS SANCHEZ AYALA",
        first_lastname: "-",
        sponsor: 2,
        placement: 2,
        username: "Rossy0681",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3321617482",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BLANCA ESTELA SANCHEZ CERVANTES",
        first_lastname: "-",
        sponsor: 3,
        placement: 3,
        username: "Estela",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3329487693",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RICARDO ALEXIS OVIEDO LOPEZ",
        first_lastname: "-",
        sponsor: 3,
        placement: 3,
        username: "Alexis",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3318354138",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JAIME FLORES JIMENEZ",
        first_lastname: "-",
        sponsor: 3,
        placement: 4,
        username: "JaimeFlores",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3313581192",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ATHZIRY KRISELL FLORES LOPEZ",
        first_lastname: "-",
        sponsor: 6,
        placement: 6,
        username: "Athziry2395",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3315768398",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DEL CARMEN IGLESIAS ECHENIQUE",
        first_lastname: "-",
        sponsor: 3,
        placement: 4,
        username: "Echenique0823",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8125664686",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FERNANDO VILLA FLORES",
        first_lastname: "-",
        sponsor: 2,
        placement: 4,
        username: "eslayfer",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3318779264",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JORDY EDMUNDO VILA SANCHEZ",
        first_lastname: "-",
        sponsor: 3,
        placement: 5,
        username: "JORDY2597",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3313250333",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GERARDO ROBERTO SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 1,
        placement: 1,
        username: "Tigre357",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3311125566",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALEJANDRA PAOLA SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 11,
        placement: 11,
        username: "Ale",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS RAFAEL RAMIREZ OCHOA",
        first_lastname: "-",
        sponsor: 11,
        placement: 11,
        username: "Charly",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3312958589",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELENA MURILLO GLADIN",
        first_lastname: "-",
        sponsor: 13,
        placement: 13,
        username: "Malelon123",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3328655380",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MIREYA VAZQUEZ FRANCO",
        first_lastname: "-",
        sponsor: 13,
        placement: 13,
        username: "Yeya",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3312958589",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO DE NENA",
        first_lastname: "-",
        sponsor: 14,
        placement: 14,
        username: "Panchito",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MAGDALENA CARRILLO CERVERA",
        first_lastname: "-",
        sponsor: 14,
        placement: 14,
        username: "Magdis1818",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3335976382",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "REFUGIO TORRES RODRIGUEZ",
        first_lastname: "-",
        sponsor: 14,
        placement: 14,
        username: "Refutr62",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3318373940",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL ADRIAN SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 11,
        placement: 11,
        username: "Angel",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GABRIELA GUILLERMINA PEREZ SANDOVAL",
        first_lastname: "-",
        sponsor: 1,
        placement: 1,
        username: "Gabysa",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3339659278",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "AMRAM ESAU DIAZ FERNANDEZ",
        first_lastname: "-",
        sponsor: 20,
        placement: 20,
        username: "Milenario",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3317510048",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO JAVIER SOTO GARCÍA",
        first_lastname: "-",
        sponsor: 21,
        placement: 21,
        username: "Pansho64",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3314804101",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA ELIZABETH NORIEGA GARCIA",
        first_lastname: "-",
        sponsor: 21,
        placement: 21,
        username: "elinoriega",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2283415475",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FERNANDO TRUEBA VALDES",
        first_lastname: "-",
        sponsor: 23,
        placement: 23,
        username: "fernandotv",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7223644300",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL SANTIAGO NOVELO ZAPATA",
        first_lastname: "-",
        sponsor: 24,
        placement: 24,
        username: "exito64",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9821066999",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS ARTURO PRIEGO COLORADO",
        first_lastname: "-",
        sponsor: 24,
        placement: 25,
        username: "carturo",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9373691326",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ARTURO ROBLES OLVERA",
        first_lastname: "-",
        sponsor: 26,
        placement: 26,
        username: "Arturo71",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8334372884",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE MARIA GONZALEZ INIGUEZ",
        first_lastname: "-",
        sponsor: 27,
        placement: 27,
        username: "Mugatuz",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3321219765",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIBEL ANDRADE USCANGA",
        first_lastname: "-",
        sponsor: 28,
        placement: 28,
        username: "Maribelly",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2831000145",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "TERESA ESCOBEDO ALVISO",
        first_lastname: "-",
        sponsor: 29,
        placement: 29,
        username: "Tereesc",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "4444236052",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VIRGINIA ESCOBEDO ALVISO",
        first_lastname: "-",
        sponsor: 30,
        placement: 30,
        username: "Vickyea",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "4961221736",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUIS JIMENEZ BUENROSTRO",
        first_lastname: "-",
        sponsor: 31,
        placement: 31,
        username: "Profejb",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3751047773",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LAURA GALVAN MONTES",
        first_lastname: "-",
        sponsor: 32,
        placement: 32,
        username: "Profelgm",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3333776031",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUIS GONZALEZ URBANO",
        first_lastname: "-",
        sponsor: 32,
        placement: 33,
        username: "Josegonza",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3221217691",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LILIANA CARBALLO CABRERA",
        first_lastname: "-",
        sponsor: 34,
        placement: 34,
        username: "LILICAR",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3221239607",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIO MARTIN CARO",
        first_lastname: "-",
        sponsor: 32,
        placement: 32,
        username: "antmarcar",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3751462873",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALFONSO GUTIERREZ BEAS",
        first_lastname: "-",
        sponsor: 32,
        placement: 32,
        username: "Alponsh0",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3331377164",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUMERCINDA MERCADO BERMUDEZ",
        first_lastname: "-",
        sponsor: 30,
        placement: 30,
        username: "termerb",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "4581049219",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JORGE HERNANDEZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 29,
        placement: 29,
        username: "jdobleh",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9932244312",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DELIA CAMPUSANO RAYMUNDO",
        first_lastname: "-",
        sponsor: 26,
        placement: 27,
        username: "Madecare",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6461293100",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ISIDRO PEREZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 26,
        placement: 26,
        username: "Iperez7",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8681870727",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "NIDIA HERNANDEZ MARTINEZ",
        first_lastname: "-",
        sponsor: 25,
        placement: 26,
        username: "Cereza67",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8711352483",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA INES SANDOVAL CERDA",
        first_lastname: "-",
        sponsor: 42,
        placement: 42,
        username: "Mines13",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8181174862",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "TRINIDAD SOCORRO MIRANDA PIZARRO",
        first_lastname: "-",
        sponsor: 42,
        placement: 43,
        username: "miranda12",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6567564441",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "DANIELA CHAVEZ MIRANDA",
        first_lastname: "-",
        sponsor: 44,
        placement: 44,
        username: "Fer12",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6561373191",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELENA REYES ESCOBEDO",
        first_lastname: "-",
        sponsor: 45,
        placement: 45,
        username: "Mariel18",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6562752940",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RITA VELIA MANDUJANO ALVAREZ",
        first_lastname: "-",
        sponsor: 45,
        placement: 45,
        username: "Rita63",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6562747854",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUCIO SANCHEZ GUZMAN",
        first_lastname: "-",
        sponsor: 44,
        placement: 44,
        username: "sanguz22",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2294665150",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "NANCY AGUIRRE HERNANDEZ",
        first_lastname: "-",
        sponsor: 48,
        placement: 48,
        username: "nancy56",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2293230632",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EDILBERTO CANO CARLIN",
        first_lastname: "-",
        sponsor: 48,
        placement: 48,
        username: "edy45",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2293912027",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAMON ADOLFO ARCE FLORES",
        first_lastname: "-",
        sponsor: 44,
        placement: 44,
        username: "profe43",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6644045977",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "IRMA GRACIELA PAVIA TARANGO",
        first_lastname: "-",
        sponsor: 42,
        placement: 42,
        username: "pati1968",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6141362363",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAUL BERNAL CRISPIN",
        first_lastname: "-",
        sponsor: 42,
        placement: 42,
        username: "Raul01",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8717091293",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANA ELVIA CHIPAHUA CORDOVA",
        first_lastname: "-",
        sponsor: 25,
        placement: 25,
        username: "CHIKALINDA",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5541360248",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIO MENDEZ GARCIA",
        first_lastname: "-",
        sponsor: 54,
        placement: 54,
        username: "Antonio0405",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5516062612",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE DE JESUS AYALA SOLANO",
        first_lastname: "-",
        sponsor: 25,
        placement: 55,
        username: "titan73",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5559675018",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS CASTELLANOS GARCIA",
        first_lastname: "-",
        sponsor: 54,
        placement: 54,
        username: "CHARLY56",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5530689278",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARGARITO GONZALEZ NOLASCO",
        first_lastname: "-",
        sponsor: 25,
        placement: 25,
        username: "Mayito65",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7291151316",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARTHA URBANO EUGENIO",
        first_lastname: "-",
        sponsor: 58,
        placement: 58,
        username: "Maubeg",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7291155063",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARCO ANTONIO ALTAMIRANO URBANO",
        first_lastname: "-",
        sponsor: 59,
        placement: 59,
        username: "Marcalt",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2227158660",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELIA MICAELINA JUAREZ EUGENIO",
        first_lastname: "-",
        sponsor: 59,
        placement: 59,
        username: "Micael3482",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2221394995",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALEJANDRO GONZALEZ CANDIA",
        first_lastname: "-",
        sponsor: 58,
        placement: 58,
        username: "C@ndy",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7227448359",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JULIO ANGEL GONZALEZ VERA",
        first_lastname: "-",
        sponsor: 58,
        placement: 58,
        username: "ngxl21",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2213199030",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO NUNEZ FERNANDEZ",
        first_lastname: "-",
        sponsor: 24,
        placement: 24,
        username: "Negociosf",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5527100223",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANSELMO ESPEJEL ESPINOSA",
        first_lastname: "-",
        sponsor: 64,
        placement: 64,
        username: "Antony08",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5541870552",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GABRIEL DAVID GOMEZ BECERRIL",
        first_lastname: "-",
        sponsor: 65,
        placement: 65,
        username: "Gaboteam",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5615870976",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "NORMA LOPEZ LOPEZ",
        first_lastname: "-",
        sponsor: 66,
        placement: 66,
        username: "Normis777",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9995568833",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROCIO LORENZA ABREU MARTINEZ",
        first_lastname: "-",
        sponsor: 65,
        placement: 66,
        username: "Exitototal",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2227720419",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VICTOR ALTAMIRANO CASTILLO",
        first_lastname: "-",
        sponsor: 66,
        placement: 66,
        username: "Altkasvik",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9211026597",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BENITO VILLAR PALACIOS",
        first_lastname: "-",
        sponsor: 69,
        placement: 69,
        username: "Bariteam",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9212460760",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA GARCIA ESPINOSA",
        first_lastname: "-",
        sponsor: 65,
        placement: 65,
        username: "Fabis94",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5522569687",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VICTOR MANUEL VILLEGAS ESCAMIROSA",
        first_lastname: "-",
        sponsor: 71,
        placement: 71,
        username: "vimavi",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5573726615",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA EUGENIA TREJO RIVERA",
        first_lastname: "-",
        sponsor: 72,
        placement: 72,
        username: "Maru0818",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5514008639",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "HILDA ZAMORA MARTINEZ",
        first_lastname: "-",
        sponsor: 73,
        placement: 73,
        username: "Zamo2150",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8999840646",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SAMUEL DOMINGUEZ TORRES",
        first_lastname: "-",
        sponsor: 74,
        placement: 74,
        username: "RAVA 5180",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5573080433",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GLADYS CANDIA TREJO",
        first_lastname: "-",
        sponsor: 73,
        placement: 73,
        username: "Gladys",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5527526610",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EVA CONSUELO HERNANDEZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 76,
        placement: 76,
        username: "Evita1987",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5539834045",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARMEN RODRIGUEZ VAZQUEZ",
        first_lastname: "-",
        sponsor: 72,
        placement: 72,
        username: "princesa7",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5620416418",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROSALINDA HORTENSIA GARCIA RODRIGUEZ",
        first_lastname: "-",
        sponsor: 78,
        placement: 78,
        username: "Estrella",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5514107188",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CELESTINO MALDONADO NERIA",
        first_lastname: "-",
        sponsor: 79,
        placement: 79,
        username: "Maravilloso",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5581821299",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ESTHER RUBIO CARRILLO",
        first_lastname: "-",
        sponsor: 79,
        placement: 79,
        username: "ESTHER63",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5538198056",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MILTON CHAVEZ LECHUGA",
        first_lastname: "-",
        sponsor: 78,
        placement: 78,
        username: "Kamil",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5620416518",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ESCARLET CHAVEZ RODRIGUEZ",
        first_lastname: "-",
        sponsor: 78,
        placement: 78,
        username: "Skay86",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5620416418",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "HORTENCIA ESCAMIROSA TINOCO",
        first_lastname: "-",
        sponsor: 72,
        placement: 72,
        username: "Escami",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5573726548",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARCO ANTONIO GARCIA MORALES",
        first_lastname: "-",
        sponsor: 84,
        placement: 84,
        username: "Markito",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5563309610",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SANDRA EMILIA MARTINEZ CASTAÑEDA",
        first_lastname: "-",
        sponsor: 85,
        placement: 85,
        username: "mvzsandra",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5559398786",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FABIOLA MENDEZ GARCIA",
        first_lastname: "-",
        sponsor: 71,
        placement: 71,
        username: "Fabiola04",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5522569687",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELENA CANSECO TORRES",
        first_lastname: "-",
        sponsor: 87,
        placement: 87,
        username: "Malena18",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5564371963",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE DANIEL ESPINOSA GARCIA",
        first_lastname: "-",
        sponsor: 65,
        placement: 65,
        username: "Dany290584",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5537979670",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "PRISCILA LOYOLA MONTES DE OCA",
        first_lastname: "-",
        sponsor: 89,
        placement: 89,
        username: "PrizLoyola98",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5542973593",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALMA DELIA MONTES DE OCA GOMEZ",
        first_lastname: "-",
        sponsor: 90,
        placement: 90,
        username: "Almanolas77",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5533489884",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VIRGINIA GRANADOS JUAREZ",
        first_lastname: "-",
        sponsor: 89,
        placement: 89,
        username: "Viki0622",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7721083611",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BELEM HERNANDEZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 64,
        placement: 64,
        username: "BELLYHH",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5542867860",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUIS DE LA GARZA ROMERO",
        first_lastname: "-",
        sponsor: 93,
        placement: 93,
        username: "MEGALANA",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9712620475",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: " MARGARITA JUAREZ VASQUEZ",
        first_lastname: "-",
        sponsor: 94,
        placement: 94,
        username: "MAGO1019",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9711302952",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FLORENTINA GONZALEZ GONZALEZ",
        first_lastname: "-",
        sponsor: 93,
        placement: 93,
        username: "Florecita22",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281506615",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SAMUEL RAMOS MORENO",
        first_lastname: "-",
        sponsor: 96,
        placement: 96,
        username: "Sam22",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281199256",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MA. DORA ZAMARRIPA VARGAS",
        first_lastname: "-",
        sponsor: 96,
        placement: 97,
        username: "dorita23",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281445493",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROSAURA BEATRIZ GUERRERO VILLEGAS",
        first_lastname: "-",
        sponsor: 96,
        placement: 96,
        username: "rosaura70",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2283470787",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LUZ MARIA BERNAL RODRIGUEZ",
        first_lastname: "-",
        sponsor: 96,
        placement: 96,
        username: "Luzma3",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2282955840",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GRISELDA REYES CRUZ",
        first_lastname: "-",
        sponsor: 100,
        placement: 100,
        username: "Gris2022",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281319538",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "XIMENA ORTIGOZA FAJARDO",
        first_lastname: "-",
        sponsor: 100,
        placement: 100,
        username: "XimenadelaO",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281258853",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MICHEL JAZMIN NUÑEZ AGUILERA",
        first_lastname: "-",
        sponsor: 93,
        placement: 93,
        username: "GANAYA",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5531329992",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUADALUPE MELENDREZ ARENAS",
        first_lastname: "-",
        sponsor: 64,
        placement: 64,
        username: "Diamante62",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6444208981",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "OSCAR DAVILA ALVARADO",
        first_lastname: "-",
        sponsor: 24,
        placement: 104,
        username: "oscarteam",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "4491169284",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GLORIA ELENA GARCIA FELIX",
        first_lastname: "-",
        sponsor: 24,
        placement: 24,
        username: "yoyisexitosa",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6671275698",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GAMALIEL ARGUELLO HERNANDEZ",
        first_lastname: "-",
        sponsor: 106,
        placement: 106,
        username: "Gamma77",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8334627731",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CESAR ALBERTO LARA PEREZ",
        first_lastname: "-",
        sponsor: 107,
        placement: 107,
        username: "Lara74",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9612995323",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JORGE HERNANDEZ DE LOS SANTOS",
        first_lastname: "-",
        sponsor: 107,
        placement: 107,
        username: "Johs",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5560329244",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SUSANA GARCIA FLORES",
        first_lastname: "-",
        sponsor: 109,
        placement: 109,
        username: "SuGar",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5517296214",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAFAEL ORTEGA HERNANDEZ",
        first_lastname: "-",
        sponsor: 109,
        placement: 109,
        username: "Lifepasion",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9842627808",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ADELAIDA SANTOS ESTRADA",
        first_lastname: "-",
        sponsor: 111,
        placement: 111,
        username: "creandograndeza",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9993665697",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EDUARDO RAMON COGQUE",
        first_lastname: "-",
        sponsor: 111,
        placement: 112,
        username: "Unidostehuacan",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2382527054",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LUCIA CAROLINA RAMIREZ GONZALEZ",
        first_lastname: "-",
        sponsor: 113,
        placement: 113,
        username: "Karoarca$",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2381238745",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SANDRA LUZ CASTILLO GONZALEZ",
        first_lastname: "-",
        sponsor: 111,
        placement: 111,
        username: "Sandraluz",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8335490035",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSEFINA CERDA GUILLEN",
        first_lastname: "-",
        sponsor: 115,
        placement: 115,
        username: "Josefin26",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "4525204763",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARCO ANTONIO DIAZ GUERRERO",
        first_lastname: "-",
        sponsor: 111,
        placement: 111,
        username: "MARCO12345",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7621076488",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EVERARDO MORENO ISLAS",
        first_lastname: "-",
        sponsor: 107,
        placement: 107,
        username: "Everardo68",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6442122544",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DE JESUS ORTEGA PEÑA",
        first_lastname: "-",
        sponsor: 118,
        placement: 118,
        username: "Palazio1",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6681715207",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ISRAEL HERRERA CHAPARRO",
        first_lastname: "-",
        sponsor: 106,
        placement: 106,
        username: "kspv",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6677468780",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUAN JORGE HERNANDEZ PEREZ",
        first_lastname: "-",
        sponsor: 120,
        placement: 120,
        username: "jjhp23",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9671431450",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA BARRUETA OCHOA",
        first_lastname: "-",
        sponsor: 120,
        placement: 120,
        username: "elvianet",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5529392039",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUANA LETICIA ESTRADA AGUIRRE",
        first_lastname: "-",
        sponsor: 106,
        placement: 106,
        username: "Latty@grande ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8123507464",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GLORIA DANIELA LEAL GARCIA",
        first_lastname: "-",
        sponsor: 123,
        placement: 123,
        username: "Danipoter",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6673889457",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROSENDO VERGARA MUÑOZ",
        first_lastname: "-",
        sponsor: 124,
        placement: 124,
        username: "rossmuñoz/",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5570833614",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MERCEDES OSUNA MENDIVIL",
        first_lastname: "-",
        sponsor: 123,
        placement: 123,
        username: "Lash2415",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6311103007",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SUGHEY HANANY OLIVAS OSUNA",
        first_lastname: "-",
        sponsor: 126,
        placement: 126,
        username: "SHOO",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6311117331",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GONZALO ALBERTO GARCIA LEON",
        first_lastname: "-",
        sponsor: 127,
        placement: 127,
        username: "Aguilareal",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9933780403",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GONZALO ALBERTO VIVAR PULIDO",
        first_lastname: "-",
        sponsor: 128,
        placement: 128,
        username: "Gavivar60",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9932454647",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALONSO MOLINA TRUJILLO",
        first_lastname: "-",
        sponsor: 129,
        placement: 129,
        username: "mota1975",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9931503782",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE FRANCISCO LEON SANTOS",
        first_lastname: "-",
        sponsor: 129,
        placement: 129,
        username: "Chocoleon2013",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9931149864",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RICARDO GUADARRAMA PEREZ",
        first_lastname: "-",
        sponsor: 126,
        placement: 127,
        username: "BLACKPOWER",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "523921122059",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FELIPE BELTRAN PONCE",
        first_lastname: "-",
        sponsor: 126,
        placement: 126,
        username: "felipe0000",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6623484899",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARILU IZQUIERDO MARQUEZ",
        first_lastname: "-",
        sponsor: 126,
        placement: 126,
        username: "Mary2023",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9931177256",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MANUEL MONDRAGON LECHUGA",
        first_lastname: "-",
        sponsor: 123,
        placement: 123,
        username: "ManoloML",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7223065134",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DE LA LUZ SANCHEZ GOMEZ",
        first_lastname: "-",
        sponsor: 135,
        placement: 135,
        username: "LuzMary",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9321196778",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA GARCIA VILLANUEVA",
        first_lastname: "-",
        sponsor: 23,
        placement: 23,
        username: "elviagarcia",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281738359",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUADALUPE VICTORIA HERNÁNDEZ ALARCON",
        first_lastname: "-",
        sponsor: 137,
        placement: 137,
        username: "vikyhernandez",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2282942440",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ABIGAIL HERNANDEZ LEON",
        first_lastname: "-",
        sponsor: 138,
        placement: 138,
        username: "abyhernandez",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2283383007",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ADELA ABURTO MARIN",
        first_lastname: "-",
        sponsor: 138,
        placement: 138,
        username: "paloma*",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281112671",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EVERARDO GARCIA VILLANUEVA",
        first_lastname: "-",
        sponsor: 137,
        placement: 137,
        username: "evegave",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9231381326",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RUBICELIA RIVERA VELA",
        first_lastname: "-",
        sponsor: 141,
        placement: 141,
        username: "Merit",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "9231089903",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SILVIA ESTHER CASTANEDA MARIN",
        first_lastname: "-",
        sponsor: 137,
        placement: 137,
        username: "Silcamar",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7223373985",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALFREDO ERICK HERRERA MARTINEZ",
        first_lastname: "-",
        sponsor: 23,
        placement: 23,
        username: "erickherreramtz",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281093656",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA GUADALUPE LOPEZ REYES",
        first_lastname: "-",
        sponsor: 144,
        placement: 144,
        username: "lupitalopezreyes80",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2282564294",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ERICK DE JESUS HERRERA LOPEZ",
        first_lastname: "-",
        sponsor: 145,
        placement: 145,
        username: "erickherrera2003",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2283029246",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIO JIMENEZ CORDOBA",
        first_lastname: "-",
        sponsor: 146,
        placement: 146,
        username: "antoniojmz2023",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281580158",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BLANCA ESTELA ALVAREZ CRUZ",
        first_lastname: "-",
        sponsor: 145,
        placement: 145,
        username: "blancaalvarezc",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5518564857",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANDRES SANCHEZ MORALES",
        first_lastname: "-",
        sponsor: 148,
        placement: 148,
        username: "andressanchezm",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5565558470",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "OLIVIA OLAZO OVANDO",
        first_lastname: "-",
        sponsor: 148,
        placement: 148,
        username: "Ololazo",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2291252172",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ENRIQUE GARCIA PUGA",
        first_lastname: "-",
        sponsor: 144,
        placement: 144,
        username: "Enriquegp",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2282271439",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS ANTONIO JIMENEZ MORALES",
        first_lastname: "-",
        sponsor: 151,
        placement: 151,
        username: "Carlosajm",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7711342976",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "AIDE CARRILLO VIZCARRA",
        first_lastname: "-",
        sponsor: 152,
        placement: 152,
        username: "Aide771",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7711365549",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL ANTONIO JIMENEZ GONZALEZ",
        first_lastname: "-",
        sponsor: 152,
        placement: 152,
        username: "Ángel2000",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6566516721",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE MANUEL PALAFOX PALACIOS",
        first_lastname: "-",
        sponsor: 151,
        placement: 151,
        username: "mpalafox",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2281507224",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARÍA DEL ROCIO VELASCO ZAVALETA",
        first_lastname: "-",
        sponsor: 155,
        placement: 155,
        username: "Rocíov680901",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2282128503",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ARMANDO HUERTA ESCOBEDO",
        first_lastname: "-",
        sponsor: 21,
        placement: 21,
        username: "Aguilanegra",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3322420089",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUAN CARLOS FLORES ARROYO",
        first_lastname: "-",
        sponsor: 21,
        placement: 157,
        username: "Carlitos28",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2711139016",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BEATRIZ SEDANO SALCEDO",
        first_lastname: "-",
        sponsor: 21,
        placement: 21,
        username: "Betty20",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3310270696",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CECILIA DELGADILLO GONZALEZ",
        first_lastname: "-",
        sponsor: 20,
        placement: 20,
        username: "Cecilia",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3313959080",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EUSEBIA OLIVARES JIMENEZ",
        first_lastname: "-",
        sponsor: 160,
        placement: 160,
        username: "Eusebia",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2226121695",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAFAEL PARRA MENDOZA",
        first_lastname: "-",
        sponsor: 161,
        placement: 161,
        username: "Rafael",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2228027202",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE GILBERTO RAFAEL RODRIGUEZ GONZALEZ",
        first_lastname: "-",
        sponsor: 162,
        placement: 162,
        username: "GILBERTO",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2225633807",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "PETRA MORALES JIMENEZ",
        first_lastname: "-",
        sponsor: 162,
        placement: 162,
        username: "PETRA",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2441191066",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE GUILLERMO RODRIGUEZ OLIVAREZ",
        first_lastname: "-",
        sponsor: 162,
        placement: 162,
        username: "GUILLERMO",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2223325580",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LUCIO GALLARDO BENITEZ",
        first_lastname: "-",
        sponsor: 161,
        placement: 161,
        username: "Lucio",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2225773304",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE CHARBEL RODRIGUEZ OLIVARES",
        first_lastname: "-",
        sponsor: 166,
        placement: 166,
        username: "Charbel",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2217813791",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANA LAURA ORTIZ RAMIREZ",
        first_lastname: "-",
        sponsor: 167,
        placement: 167,
        username: "Analaura",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7341242270",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELIZABETH HERNANDEZ RAMIREZ",
        first_lastname: "-",
        sponsor: 167,
        placement: 167,
        username: "ELIZABETH",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2224613826",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RICARDO RAMIREZ GOMEZ",
        first_lastname: "-",
        sponsor: 167,
        placement: 167,
        username: "RICARDORMRZ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2227598283",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARTHA CIRNES CHANTES",
        first_lastname: "-",
        sponsor: 166,
        placement: 166,
        username: "Cirnes",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2224412950",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUILLERMO SERAFIN MIXCOATL PEREZ",
        first_lastname: "-",
        sponsor: 171,
        placement: 171,
        username: "MIXCOATL",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2225644052",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELENA GONZALEZ ORTIZ",
        first_lastname: "-",
        sponsor: 171,
        placement: 171,
        username: "ELENAGLEZ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2211424799",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EMMANUEL TELLO CASCO",
        first_lastname: "-",
        sponsor: 171,
        placement: 171,
        username: "EMMANUELTEL",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2225247042",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MIRIAN JIMENEZ BAUTISTA",
        first_lastname: "-",
        sponsor: 166,
        placement: 166,
        username: "MIRIAN",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2225648474",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA SILVIA DIAZ MOLINA",
        first_lastname: "-",
        sponsor: 175,
        placement: 175,
        username: "MADIAZ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2224736255",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUILLERMINA ESPINOZA FLORES",
        first_lastname: "-",
        sponsor: 175,
        placement: 175,
        username: "GUILLEZ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2221344864",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA BELEM GOMEZ ESPINOZA",
        first_lastname: "-",
        sponsor: 161,
        placement: 161,
        username: "BELEM",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2227201901",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ENEDINA RAMIREZ VILLEGAS",
        first_lastname: "-",
        sponsor: 178,
        placement: 178,
        username: "ENEDINA",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2211095481",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DEL CARMEN DOMINGUEZ ARCOS",
        first_lastname: "-",
        sponsor: 179,
        placement: 179,
        username: "CARMENDOMINGUEZ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2224571383",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "IAN MISAEL RAMIREZ GOMEZ",
        first_lastname: "-",
        sponsor: 179,
        placement: 179,
        username: "IAN",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2227201901",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "REMEDIOS GOMEZ ESPINOZA",
        first_lastname: "-",
        sponsor: 179,
        placement: 179,
        username: "REMEDIOS",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2223125984",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA GUADALUPE MARTINEZ MONTIEL",
        first_lastname: "-",
        sponsor: 178,
        placement: 178,
        username: "MAGUADALUPE",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "7715575598",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "AMELIA MARISINA CASCO DIAZ",
        first_lastname: "-",
        sponsor: 178,
        placement: 178,
        username: "CASCO",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2228296687",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LIZETTE ARAUJO BLEIZEFFER",
        first_lastname: "-",
        sponsor: 160,
        placement: 160,
        username: "Lizette",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LISSETTE PENELOPE ARAUJO BLEIZEFFER",
        first_lastname: "-",
        sponsor: 185,
        placement: 185,
        username: "Lissette",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ARCELIA VIVEROS BLANCO",
        first_lastname: "-",
        sponsor: 160,
        placement: 160,
        username: "Arcelia",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2224354336",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO TRUJILLO ESPINOZA",
        first_lastname: "-",
        sponsor: 187,
        placement: 187,
        username: "Francisco",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "2441375289",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELENA GALVAN CAZARES",
        first_lastname: "-",
        sponsor: 188,
        placement: 188,
        username: "ElenaGalvan",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "8333009334",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SANJUANA MARTINEZ ESPINOZA",
        first_lastname: "-",
        sponsor: 187,
        placement: 187,
        username: "Sanjuana",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "5639737896",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIO JESUS REDING HERNANDEZ",
        first_lastname: "-",
        sponsor: 160,
        placement: 187,
        username: "MarioReding",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "333488867",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALICIA MAGANA MORALES",
        first_lastname: "-",
        sponsor: 187,
        placement: 191,
        username: "Goretti",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3334842197",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ERENDIRA REGLA SANTANA",
        first_lastname: "-",
        sponsor: 20,
        placement: 20,
        username: "Erendira",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3314852099",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "WILFRIDO FRANQUEZ LOPEZ",
        first_lastname: "-",
        sponsor: 20,
        placement: 193,
        username: "WILFRIDO58",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3327932217",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUAN PABLO PEREZLETE PEREZ",
        first_lastname: "-",
        sponsor: 20,
        placement: 193,
        username: "JPablo",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3337052735",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIO RAFAEL RAYAS FRANCO",
        first_lastname: "-",
        sponsor: 195,
        placement: 195,
        username: "MRayas",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3315671047",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MA. ISABEL CASTAÑEDA RAMOS",
        first_lastname: "-",
        sponsor: 195,
        placement: 195,
        username: "Coralito333",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3331996776",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BERNARDA NAVARRO IBARRA",
        first_lastname: "-",
        sponsor: 197,
        placement: 197,
        username: "Larosa",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3334533428",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE FERNANDO OLIVA RICO",
        first_lastname: "-",
        sponsor: 197,
        placement: 197,
        username: "HADDEZ",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3318656233",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GABRIELA GUILLERMINA PEREZLETE PEREZ",
        first_lastname: "-",
        sponsor: 195,
        placement: 195,
        username: "GGuille",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3324885129",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "HECTOR ROMAN OROZCO JIMENEZ",
        first_lastname: "-",
        sponsor: 2,
        placement: 193,
        username: "HRoman77",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3337803228",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL ADRIAN SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 11,
        placement: 11,
        username: "230112",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DEL CARMEN GARCIA LUNA",
        first_lastname: "-",
        sponsor: 1,
        placement: 1,
        username: "Carmelita",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3310100625",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUANA GUADALUPE SANCHEZ TAPIA",
        first_lastname: "-",
        sponsor: 203,
        placement: 203,
        username: "Gabina1934",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3336770511",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BERTHA ALICIA GARCIA LUNA",
        first_lastname: "-",
        sponsor: 204,
        placement: 204,
        username: "Dana@105",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3234562888",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA GUADALUPE MAGAÑA MORALES",
        first_lastname: "-",
        sponsor: 203,
        placement: 203,
        username: "Camila28$",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3332315364",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUADALUPE MARTINEZ PAZ",
        first_lastname: "-",
        sponsor: 206,
        placement: 206,
        username: "Lupis@25",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6562150859",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIA CHACON",
        first_lastname: "-",
        sponsor: 207,
        placement: 207,
        username: "Tony0322",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6561809509",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VICTOR MANUEL CARO LUJAN",
        first_lastname: "-",
        sponsor: 207,
        placement: 207,
        username: "Guadalupe2004$",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6561356207",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARGARITA MARTINEZ PAZ",
        first_lastname: "-",
        sponsor: 207,
        placement: 207,
        username: "marga62",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "6621121970",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE ALBERTO GAYTAN MAGAÑA",
        first_lastname: "-",
        sponsor: 206,
        placement: 206,
        username: "Adamaris28$",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3334630112",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARTHA PATRICIA MORALES CHAVEZ",
        first_lastname: "-",
        sponsor: 203,
        placement: 203,
        username: "Paty2021$",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3334960885",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MA LUZ RIVAS CONTRERAS",
        first_lastname: "-",
        sponsor: 212,
        placement: 212,
        username: "Malu$56",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3323381354",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ISABEL GARCIA LUNA",
        first_lastname: "-",
        sponsor: 212,
        placement: 212,
        username: "Lalo40",
        password:
          "$2b$10$CmqaBqZHNmyoRFY9oOXxK./06bYm6IT5Pizj4bGn4pR1kbAdkUSo.",
        phone: "3313032061",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
