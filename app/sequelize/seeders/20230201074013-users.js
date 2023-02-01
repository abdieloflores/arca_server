"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "OMAR ULISES FLORES GONZALEZ",
        first_lastname: "-",
        sponsor: 0,
        placement: null,
        username: "Ulyflores",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "OMAR ROGELIO FLORES CORRAL",
        first_lastname: "-",
        sponsor: 1,
        placement: null,
        username: "Roger67",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3319706080",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ROCIO DE JESUS SANCHEZ AYALA",
        first_lastname: "-",
        sponsor: 2,
        placement: null,
        username: "Rossy0681",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3321617482",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BLANCA ESTELA SANCHEZ CERVANTES",
        first_lastname: "-",
        sponsor: 3,
        placement: null,
        username: "Estela",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3329487693",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RICARDO ALEXIS OVIEDO LOPEZ",
        first_lastname: "-",
        sponsor: 3,
        placement: null,
        username: "Alexis",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3313581192",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ATHZIRY KRISELL FLORES LOPEZ",
        first_lastname: "-",
        sponsor: 6,
        placement: null,
        username: "Athziry2395",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3313250333",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GERARDO ROBERTO SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 1,
        placement: null,
        username: "Tigre357",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3311125566",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALEJANDRA PAOLA SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 11,
        placement: null,
        username: "Ale",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS RAFAEL RAMIREZ OCHOA",
        first_lastname: "-",
        sponsor: 11,
        placement: null,
        username: "Charly",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3312958589",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELENA MURILLO GLADIN",
        first_lastname: "-",
        sponsor: 13,
        placement: null,
        username: "Malelon123",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3328655380",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MIREYA VAZQUEZ FRANCO",
        first_lastname: "-",
        sponsor: 13,
        placement: null,
        username: "Yeya",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3312958589",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO DE NENA",
        first_lastname: "-",
        sponsor: 14,
        placement: null,
        username: "Panchito",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MAGDALENA CARRILLO CERVERA",
        first_lastname: "-",
        sponsor: 14,
        placement: null,
        username: "Magdis1818",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3335976382",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "REFUGIO TORRES RODRIGUEZ",
        first_lastname: "-",
        sponsor: 14,
        placement: null,
        username: "Refutr62",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3318373940",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL ADRIAN SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 11,
        placement: null,
        username: "Angel",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GABRIELA GUILLERMINA PEREZ SANDOVAL",
        first_lastname: "-",
        sponsor: 1,
        placement: null,
        username: "Gabysa",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3339659278",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "AMRAM ESAU DIAZ FERNANDEZ",
        first_lastname: "-",
        sponsor: 20,
        placement: null,
        username: "Milenario",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3317510048",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO JAVIER SOTO GARCÍA",
        first_lastname: "-",
        sponsor: 21,
        placement: null,
        username: "Pansho64",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3314804101",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA ELIZABETH NORIEGA GARCIA",
        first_lastname: "-",
        sponsor: 21,
        placement: null,
        username: "elinoriega",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2283415475",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FERNANDO TRUEBA VALDES",
        first_lastname: "-",
        sponsor: 23,
        placement: null,
        username: "fernandotv",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7223644300",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL SANTIAGO NOVELO ZAPATA",
        first_lastname: "-",
        sponsor: 24,
        placement: null,
        username: "exito64",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9373691326",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ARTURO ROBLES OLVERA",
        first_lastname: "-",
        sponsor: 26,
        placement: null,
        username: "Arturo71",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8334372884",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE MARIA GONZALEZ INIGUEZ",
        first_lastname: "-",
        sponsor: 27,
        placement: null,
        username: "Mugatuz",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3321219765",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIBEL ANDRADE USCANGA",
        first_lastname: "-",
        sponsor: 28,
        placement: null,
        username: "Maribelly",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2831000145",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "TERESA ESCOBEDO ALVISO",
        first_lastname: "-",
        sponsor: 29,
        placement: null,
        username: "Tereesc",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "4444236052",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VIRGINIA ESCOBEDO ALVISO",
        first_lastname: "-",
        sponsor: 30,
        placement: null,
        username: "Vickyea",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "4961221736",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUIS JIMENEZ BUENROSTRO",
        first_lastname: "-",
        sponsor: 31,
        placement: null,
        username: "Profejb",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3751047773",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LAURA GALVAN MONTES",
        first_lastname: "-",
        sponsor: 32,
        placement: null,
        username: "Profelgm",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3221217691",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LILIANA CARBALLO CABRERA",
        first_lastname: "-",
        sponsor: 34,
        placement: null,
        username: "LILICAR",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3221239607",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIO MARTIN CARO",
        first_lastname: "-",
        sponsor: 32,
        placement: null,
        username: "antmarcar",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3751462873",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALFONSO GUTIERREZ BEAS",
        first_lastname: "-",
        sponsor: 32,
        placement: null,
        username: "Alponsh0",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3331377164",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUMERCINDA MERCADO BERMUDEZ",
        first_lastname: "-",
        sponsor: 30,
        placement: null,
        username: "termerb",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "4581049219",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JORGE HERNANDEZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 29,
        placement: null,
        username: "jdobleh",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6461293100",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ISIDRO PEREZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 26,
        placement: null,
        username: "Iperez7",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8711352483",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA INES SANDOVAL CERDA",
        first_lastname: "-",
        sponsor: 42,
        placement: null,
        username: "Mines13",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6567564441",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "DANIELA CHAVEZ MIRANDA",
        first_lastname: "-",
        sponsor: 44,
        placement: null,
        username: "Fer12",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6561373191",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELENA REYES ESCOBEDO",
        first_lastname: "-",
        sponsor: 45,
        placement: null,
        username: "Mariel18",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6562752940",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RITA VELIA MANDUJANO ALVAREZ",
        first_lastname: "-",
        sponsor: 45,
        placement: null,
        username: "Rita63",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6562747854",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUCIO SANCHEZ GUZMAN",
        first_lastname: "-",
        sponsor: 44,
        placement: null,
        username: "sanguz22",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2294665150",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "NANCY AGUIRRE HERNANDEZ",
        first_lastname: "-",
        sponsor: 48,
        placement: null,
        username: "nancy56",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2293230632",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EDILBERTO CANO CARLIN",
        first_lastname: "-",
        sponsor: 48,
        placement: null,
        username: "edy45",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2293912027",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAMON ADOLFO ARCE FLORES",
        first_lastname: "-",
        sponsor: 44,
        placement: null,
        username: "profe43",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6644045977",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "IRMA GRACIELA PAVIA TARANGO",
        first_lastname: "-",
        sponsor: 42,
        placement: null,
        username: "pati1968",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6141362363",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAUL BERNAL CRISPIN",
        first_lastname: "-",
        sponsor: 42,
        placement: null,
        username: "Raul01",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8717091293",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANA ELVIA CHIPAHUA CORDOVA",
        first_lastname: "-",
        sponsor: 25,
        placement: null,
        username: "CHIKALINDA",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5541360248",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIO MENDEZ GARCIA",
        first_lastname: "-",
        sponsor: 54,
        placement: null,
        username: "Antonio0405",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5559675018",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS CASTELLANOS GARCIA",
        first_lastname: "-",
        sponsor: 54,
        placement: null,
        username: "CHARLY56",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5530689278",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARGARITO GONZALEZ NOLASCO",
        first_lastname: "-",
        sponsor: 25,
        placement: null,
        username: "Mayito65",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7291151316",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARTHA URBANO EUGENIO",
        first_lastname: "-",
        sponsor: 58,
        placement: null,
        username: "Maubeg",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7291155063",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARCO ANTONIO ALTAMIRANO URBANO",
        first_lastname: "-",
        sponsor: 59,
        placement: null,
        username: "Marcalt",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2227158660",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELIA MICAELINA JUAREZ EUGENIO",
        first_lastname: "-",
        sponsor: 59,
        placement: null,
        username: "Micael3482",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2221394995",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALEJANDRO GONZALEZ CANDIA",
        first_lastname: "-",
        sponsor: 58,
        placement: null,
        username: "C@ndy",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7227448359",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JULIO ANGEL GONZALEZ VERA",
        first_lastname: "-",
        sponsor: 58,
        placement: null,
        username: "ngxl21",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2213199030",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO NUNEZ FERNANDEZ",
        first_lastname: "-",
        sponsor: 24,
        placement: null,
        username: "Negociosf",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5527100223",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANSELMO ESPEJEL ESPINOSA",
        first_lastname: "-",
        sponsor: 64,
        placement: null,
        username: "Antony08",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5541870552",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GABRIEL DAVID GOMEZ BECERRIL",
        first_lastname: "-",
        sponsor: 65,
        placement: null,
        username: "Gaboteam",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5615870976",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "NORMA LOPEZ LOPEZ",
        first_lastname: "-",
        sponsor: 66,
        placement: null,
        username: "Normis777",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2227720419",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VICTOR ALTAMIRANO CASTILLO",
        first_lastname: "-",
        sponsor: 66,
        placement: null,
        username: "Altkasvik",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9211026597",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BENITO VILLAR PALACIOS",
        first_lastname: "-",
        sponsor: 69,
        placement: null,
        username: "Bariteam",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9212460760",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA GARCIA ESPINOSA",
        first_lastname: "-",
        sponsor: 65,
        placement: null,
        username: "Fabis94",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5522569687",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VICTOR MANUEL VILLEGAS ESCAMIROSA",
        first_lastname: "-",
        sponsor: 71,
        placement: null,
        username: "vimavi",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5573726615",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA EUGENIA TREJO RIVERA",
        first_lastname: "-",
        sponsor: 72,
        placement: null,
        username: "Maru0818",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5514008639",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "HILDA ZAMORA MARTINEZ",
        first_lastname: "-",
        sponsor: 73,
        placement: null,
        username: "Zamo2150",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8999840646",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SAMUEL DOMINGUEZ TORRES",
        first_lastname: "-",
        sponsor: 74,
        placement: null,
        username: "RAVA 5180",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5573080433",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GLADYS CANDIA TREJO",
        first_lastname: "-",
        sponsor: 73,
        placement: null,
        username: "Gladys",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5527526610",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EVA CONSUELO HERNANDEZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 76,
        placement: null,
        username: "Evita1987",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5539834045",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARMEN RODRIGUEZ VAZQUEZ",
        first_lastname: "-",
        sponsor: 72,
        placement: null,
        username: "princesa7",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5620416418",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROSALINDA HORTENSIA GARCIA RODRIGUEZ",
        first_lastname: "-",
        sponsor: 78,
        placement: null,
        username: "Estrella",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5514107188",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CELESTINO MALDONADO NERIA",
        first_lastname: "-",
        sponsor: 79,
        placement: null,
        username: "Maravilloso",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5581821299",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ESTHER RUBIO CARRILLO",
        first_lastname: "-",
        sponsor: 79,
        placement: null,
        username: "ESTHER63",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5538198056",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MILTON CHAVEZ LECHUGA",
        first_lastname: "-",
        sponsor: 78,
        placement: null,
        username: "Kamil",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5620416518",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ESCARLET CHAVEZ RODRIGUEZ",
        first_lastname: "-",
        sponsor: 78,
        placement: null,
        username: "Skay86",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5620416418",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "HORTENCIA ESCAMIROSA TINOCO",
        first_lastname: "-",
        sponsor: 72,
        placement: null,
        username: "Escami",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5573726548",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARCO ANTONIO GARCIA MORALES",
        first_lastname: "-",
        sponsor: 84,
        placement: null,
        username: "Markito",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5563309610",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SANDRA EMILIA MARTINEZ CASTAÑEDA",
        first_lastname: "-",
        sponsor: 85,
        placement: null,
        username: "mvzsandra",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5559398786",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FABIOLA MENDEZ GARCIA",
        first_lastname: "-",
        sponsor: 71,
        placement: null,
        username: "Fabiola04",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5522569687",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA ELENA CANSECO TORRES",
        first_lastname: "-",
        sponsor: 87,
        placement: null,
        username: "Malena18",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5564371963",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE DANIEL ESPINOSA GARCIA",
        first_lastname: "-",
        sponsor: 65,
        placement: null,
        username: "Dany290584",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5537979670",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "PRISCILA LOYOLA MONTES DE OCA",
        first_lastname: "-",
        sponsor: 89,
        placement: null,
        username: "PrizLoyola98",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5542973593",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALMA DELIA MONTES DE OCA GOMEZ",
        first_lastname: "-",
        sponsor: 90,
        placement: null,
        username: "Almanolas77",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5533489884",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VIRGINIA GRANADOS JUAREZ",
        first_lastname: "-",
        sponsor: 89,
        placement: null,
        username: "Viki0622",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7721083611",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BELEM HERNANDEZ HERNANDEZ",
        first_lastname: "-",
        sponsor: 64,
        placement: null,
        username: "BELLYHH",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5542867860",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE LUIS DE LA GARZA ROMERO",
        first_lastname: "-",
        sponsor: 93,
        placement: null,
        username: "MEGALANA",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9712620475",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: " MARGARITA JUAREZ VASQUEZ",
        first_lastname: "-",
        sponsor: 94,
        placement: null,
        username: "MAGO1019",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9711302952",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FLORENTINA GONZALEZ GONZALEZ",
        first_lastname: "-",
        sponsor: 93,
        placement: null,
        username: "Florecita22",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281506615",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SAMUEL RAMOS MORENO",
        first_lastname: "-",
        sponsor: 96,
        placement: null,
        username: "Sam22",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281445493",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROSAURA BEATRIZ GUERRERO VILLEGAS",
        first_lastname: "-",
        sponsor: 96,
        placement: null,
        username: "rosaura70",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2283470787",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LUZ MARIA BERNAL RODRIGUEZ",
        first_lastname: "-",
        sponsor: 96,
        placement: null,
        username: "Luzma3",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2282955840",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GRISELDA REYES CRUZ",
        first_lastname: "-",
        sponsor: 100,
        placement: null,
        username: "Gris2022",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281319538",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "XIMENA ORTIGOZA FAJARDO",
        first_lastname: "-",
        sponsor: 100,
        placement: null,
        username: "XimenadelaO",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281258853",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MICHEL JAZMIN NUÑEZ AGUILERA",
        first_lastname: "-",
        sponsor: 93,
        placement: null,
        username: "GANAYA",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5531329992",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUADALUPE MELENDREZ ARENAS",
        first_lastname: "-",
        sponsor: 64,
        placement: null,
        username: "Diamante62",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "4491169284",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GLORIA ELENA GARCIA FELIX",
        first_lastname: "-",
        sponsor: 24,
        placement: null,
        username: "yoyisexitosa",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6671275698",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GAMALIEL ARGUELLO HERNANDEZ",
        first_lastname: "-",
        sponsor: 106,
        placement: null,
        username: "Gamma77",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8334627731",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CESAR ALBERTO LARA PEREZ",
        first_lastname: "-",
        sponsor: 107,
        placement: null,
        username: "Lara74",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9612995323",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JORGE HERNANDEZ DE LOS SANTOS",
        first_lastname: "-",
        sponsor: 107,
        placement: null,
        username: "Johs",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5560329244",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SUSANA GARCIA FLORES",
        first_lastname: "-",
        sponsor: 109,
        placement: null,
        username: "SuGar",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5517296214",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAFAEL ORTEGA HERNANDEZ",
        first_lastname: "-",
        sponsor: 109,
        placement: null,
        username: "Lifepasion",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9842627808",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ADELAIDA SANTOS ESTRADA",
        first_lastname: "-",
        sponsor: 111,
        placement: null,
        username: "creandograndeza",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2382527054",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LUCIA CAROLINA RAMIREZ GONZALEZ",
        first_lastname: "-",
        sponsor: 113,
        placement: null,
        username: "Karoarca$",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2381238745",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SANDRA LUZ CASTILLO GONZALEZ",
        first_lastname: "-",
        sponsor: 111,
        placement: null,
        username: "Sandraluz",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8335490035",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSEFINA CERDA GUILLEN",
        first_lastname: "-",
        sponsor: 115,
        placement: null,
        username: "Josefin26",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "4525204763",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARCO ANTONIO DIAZ GUERRERO",
        first_lastname: "-",
        sponsor: 111,
        placement: null,
        username: "MARCO12345",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7621076488",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EVERARDO MORENO ISLAS",
        first_lastname: "-",
        sponsor: 107,
        placement: null,
        username: "Everardo68",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6442122544",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DE JESUS ORTEGA PEÑA",
        first_lastname: "-",
        sponsor: 118,
        placement: null,
        username: "Palazio1",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6681715207",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ISRAEL HERRERA CHAPARRO",
        first_lastname: "-",
        sponsor: 106,
        placement: null,
        username: "kspv",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6677468780",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUAN JORGE HERNANDEZ PEREZ",
        first_lastname: "-",
        sponsor: 120,
        placement: null,
        username: "jjhp23",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9671431450",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA BARRUETA OCHOA",
        first_lastname: "-",
        sponsor: 120,
        placement: null,
        username: "elvianet",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5529392039",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUANA LETICIA ESTRADA AGUIRRE",
        first_lastname: "-",
        sponsor: 106,
        placement: null,
        username: "Latty@grande ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8123507464",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GLORIA DANIELA LEAL GARCIA",
        first_lastname: "-",
        sponsor: 123,
        placement: null,
        username: "Danipoter",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6673889457",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ROSENDO VERGARA MUÑOZ",
        first_lastname: "-",
        sponsor: 124,
        placement: null,
        username: "rossmuñoz/",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5570833614",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MERCEDES OSUNA MENDIVIL",
        first_lastname: "-",
        sponsor: 123,
        placement: null,
        username: "Lash2415",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6311103007",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SUGHEY HANANY OLIVAS OSUNA",
        first_lastname: "-",
        sponsor: 126,
        placement: null,
        username: "SHOO",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6311117331",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GONZALO ALBERTO GARCIA LEON",
        first_lastname: "-",
        sponsor: 127,
        placement: null,
        username: "Aguilareal",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9933780403",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GONZALO ALBERTO VIVAR PULIDO",
        first_lastname: "-",
        sponsor: 128,
        placement: null,
        username: "Gavivar60",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9932454647",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALONSO MOLINA TRUJILLO",
        first_lastname: "-",
        sponsor: 129,
        placement: null,
        username: "mota1975",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9931503782",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE FRANCISCO LEON SANTOS",
        first_lastname: "-",
        sponsor: 129,
        placement: null,
        username: "Chocoleon2013",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "523921122059",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FELIPE BELTRAN PONCE",
        first_lastname: "-",
        sponsor: 126,
        placement: null,
        username: "felipe0000",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6623484899",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARILU IZQUIERDO MARQUEZ",
        first_lastname: "-",
        sponsor: 126,
        placement: null,
        username: "Mary2023",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9931177256",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MANUEL MONDRAGON LECHUGA",
        first_lastname: "-",
        sponsor: 123,
        placement: null,
        username: "ManoloML",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7223065134",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DE LA LUZ SANCHEZ GOMEZ",
        first_lastname: "-",
        sponsor: 135,
        placement: null,
        username: "LuzMary",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9321196778",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELVIA GARCIA VILLANUEVA",
        first_lastname: "-",
        sponsor: 23,
        placement: null,
        username: "elviagarcia",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281738359",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUADALUPE VICTORIA HERNÁNDEZ ALARCON",
        first_lastname: "-",
        sponsor: 137,
        placement: null,
        username: "vikyhernandez",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2282942440",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ABIGAIL HERNANDEZ LEON",
        first_lastname: "-",
        sponsor: 138,
        placement: null,
        username: "abyhernandez",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2283383007",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ADELA ABURTO MARIN",
        first_lastname: "-",
        sponsor: 138,
        placement: null,
        username: "paloma*",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281112671",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EVERARDO GARCIA VILLANUEVA",
        first_lastname: "-",
        sponsor: 137,
        placement: null,
        username: "evegave",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9231381326",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RUBICELIA RIVERA VELA",
        first_lastname: "-",
        sponsor: 141,
        placement: null,
        username: "Merit",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "9231089903",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SILVIA ESTHER CASTANEDA MARIN",
        first_lastname: "-",
        sponsor: 137,
        placement: null,
        username: "Silcamar",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7223373985",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ALFREDO ERICK HERRERA MARTINEZ",
        first_lastname: "-",
        sponsor: 23,
        placement: null,
        username: "erickherreramtz",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281093656",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA GUADALUPE LOPEZ REYES",
        first_lastname: "-",
        sponsor: 144,
        placement: null,
        username: "lupitalopezreyes80",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2282564294",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ERICK DE JESUS HERRERA LOPEZ",
        first_lastname: "-",
        sponsor: 145,
        placement: null,
        username: "erickherrera2003",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2283029246",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIO JIMENEZ CORDOBA",
        first_lastname: "-",
        sponsor: 146,
        placement: null,
        username: "antoniojmz2023",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281580158",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BLANCA ESTELA ALVAREZ CRUZ",
        first_lastname: "-",
        sponsor: 145,
        placement: null,
        username: "blancaalvarezc",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5518564857",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANDRES SANCHEZ MORALES",
        first_lastname: "-",
        sponsor: 148,
        placement: null,
        username: "andressanchezm",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "5565558470",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "OLIVIA OLAZO OVANDO",
        first_lastname: "-",
        sponsor: 148,
        placement: null,
        username: "Ololazo",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2291252172",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ENRIQUE GARCIA PUGA",
        first_lastname: "-",
        sponsor: 144,
        placement: null,
        username: "Enriquegp",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2282271439",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CARLOS ANTONIO JIMENEZ MORALES",
        first_lastname: "-",
        sponsor: 151,
        placement: null,
        username: "Carlosajm",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7711342976",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "AIDE CARRILLO VIZCARRA",
        first_lastname: "-",
        sponsor: 152,
        placement: null,
        username: "Aide771",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7711365549",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL ANTONIO JIMENEZ GONZALEZ",
        first_lastname: "-",
        sponsor: 152,
        placement: null,
        username: "Ángel2000",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6566516721",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE MANUEL PALAFOX PALACIOS",
        first_lastname: "-",
        sponsor: 151,
        placement: null,
        username: "mpalafox",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2281507224",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARÍA DEL ROCIO VELASCO ZAVALETA",
        first_lastname: "-",
        sponsor: 155,
        placement: null,
        username: "Rocíov680901",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2282128503",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ARMANDO HUERTA ESCOBEDO",
        first_lastname: "-",
        sponsor: 21,
        placement: null,
        username: "Aguilanegra",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2711139016",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BEATRIZ SEDANO SALCEDO",
        first_lastname: "-",
        sponsor: 21,
        placement: null,
        username: "Betty20",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3310270696",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "CECILIA DELGADILLO GONZALEZ",
        first_lastname: "-",
        sponsor: 20,
        placement: null,
        username: "Cecilia",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3313959080",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EUSEBIA OLIVARES JIMENEZ",
        first_lastname: "-",
        sponsor: 160,
        placement: null,
        username: "Eusebia",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2226121695",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RAFAEL PARRA MENDOZA",
        first_lastname: "-",
        sponsor: 161,
        placement: null,
        username: "Rafael",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2228027202",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE GILBERTO RAFAEL RODRIGUEZ GONZALEZ",
        first_lastname: "-",
        sponsor: 162,
        placement: null,
        username: "GILBERTO",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2225633807",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "PETRA MORALES JIMENEZ",
        first_lastname: "-",
        sponsor: 162,
        placement: null,
        username: "PETRA",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2441191066",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE GUILLERMO RODRIGUEZ OLIVAREZ",
        first_lastname: "-",
        sponsor: 162,
        placement: null,
        username: "GUILLERMO",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2223325580",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LUCIO GALLARDO BENITEZ",
        first_lastname: "-",
        sponsor: 161,
        placement: null,
        username: "Lucio",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2225773304",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE CHARBEL RODRIGUEZ OLIVARES",
        first_lastname: "-",
        sponsor: 166,
        placement: null,
        username: "Charbel",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2217813791",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANA LAURA ORTIZ RAMIREZ",
        first_lastname: "-",
        sponsor: 167,
        placement: null,
        username: "Analaura",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7341242270",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELIZABETH HERNANDEZ RAMIREZ",
        first_lastname: "-",
        sponsor: 167,
        placement: null,
        username: "ELIZABETH",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2224613826",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "RICARDO RAMIREZ GOMEZ",
        first_lastname: "-",
        sponsor: 167,
        placement: null,
        username: "RICARDORMRZ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2227598283",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARTHA CIRNES CHANTES",
        first_lastname: "-",
        sponsor: 166,
        placement: null,
        username: "Cirnes",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2224412950",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUILLERMO SERAFIN MIXCOATL PEREZ",
        first_lastname: "-",
        sponsor: 171,
        placement: null,
        username: "MIXCOATL",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2225644052",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELENA GONZALEZ ORTIZ",
        first_lastname: "-",
        sponsor: 171,
        placement: null,
        username: "ELENAGLEZ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2211424799",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "EMMANUEL TELLO CASCO",
        first_lastname: "-",
        sponsor: 171,
        placement: null,
        username: "EMMANUELTEL",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2225247042",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MIRIAN JIMENEZ BAUTISTA",
        first_lastname: "-",
        sponsor: 166,
        placement: null,
        username: "MIRIAN",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2225648474",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA SILVIA DIAZ MOLINA",
        first_lastname: "-",
        sponsor: 175,
        placement: null,
        username: "MADIAZ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2224736255",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUILLERMINA ESPINOZA FLORES",
        first_lastname: "-",
        sponsor: 175,
        placement: null,
        username: "GUILLEZ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2221344864",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA BELEM GOMEZ ESPINOZA",
        first_lastname: "-",
        sponsor: 161,
        placement: null,
        username: "BELEM",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2227201901",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ENEDINA RAMIREZ VILLEGAS",
        first_lastname: "-",
        sponsor: 178,
        placement: null,
        username: "ENEDINA",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2211095481",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DEL CARMEN DOMINGUEZ ARCOS",
        first_lastname: "-",
        sponsor: 179,
        placement: null,
        username: "CARMENDOMINGUEZ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2224571383",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "IAN MISAEL RAMIREZ GOMEZ",
        first_lastname: "-",
        sponsor: 179,
        placement: null,
        username: "IAN",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2227201901",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "REMEDIOS GOMEZ ESPINOZA",
        first_lastname: "-",
        sponsor: 179,
        placement: null,
        username: "REMEDIOS",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2223125984",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA GUADALUPE MARTINEZ MONTIEL",
        first_lastname: "-",
        sponsor: 178,
        placement: null,
        username: "MAGUADALUPE",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "7715575598",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "AMELIA MARISINA CASCO DIAZ",
        first_lastname: "-",
        sponsor: 178,
        placement: null,
        username: "CASCO",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2228296687",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LIZETTE ARAUJO BLEIZEFFER",
        first_lastname: "-",
        sponsor: 160,
        placement: null,
        username: "Lizette",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "LISSETTE PENELOPE ARAUJO BLEIZEFFER",
        first_lastname: "-",
        sponsor: 185,
        placement: null,
        username: "Lissette",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ARCELIA VIVEROS BLANCO",
        first_lastname: "-",
        sponsor: 160,
        placement: null,
        username: "Arcelia",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2224354336",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "FRANCISCO TRUJILLO ESPINOZA",
        first_lastname: "-",
        sponsor: 187,
        placement: null,
        username: "Francisco",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "2441375289",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ELENA GALVAN CAZARES",
        first_lastname: "-",
        sponsor: 188,
        placement: null,
        username: "ElenaGalvan",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "8333009334",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "SANJUANA MARTINEZ ESPINOZA",
        first_lastname: "-",
        sponsor: 187,
        placement: null,
        username: "Sanjuana",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3334842197",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ERENDIRA REGLA SANTANA",
        first_lastname: "-",
        sponsor: 20,
        placement: null,
        username: "Erendira",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3337052735",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIO RAFAEL RAYAS FRANCO",
        first_lastname: "-",
        sponsor: 195,
        placement: null,
        username: "MRayas",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3315671047",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MA. ISABEL CASTAÑEDA RAMOS",
        first_lastname: "-",
        sponsor: 195,
        placement: null,
        username: "Coralito333",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3331996776",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BERNARDA NAVARRO IBARRA",
        first_lastname: "-",
        sponsor: 197,
        placement: null,
        username: "Larosa",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3334533428",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE FERNANDO OLIVA RICO",
        first_lastname: "-",
        sponsor: 197,
        placement: null,
        username: "HADDEZ",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3318656233",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GABRIELA GUILLERMINA PEREZLETE PEREZ",
        first_lastname: "-",
        sponsor: 195,
        placement: null,
        username: "GGuille",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3337803228",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANGEL ADRIAN SANTOS GOMEZ",
        first_lastname: "-",
        sponsor: 11,
        placement: null,
        username: "230112",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA DEL CARMEN GARCIA LUNA",
        first_lastname: "-",
        sponsor: 1,
        placement: null,
        username: "Carmelita",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3310100625",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JUANA GUADALUPE SANCHEZ TAPIA",
        first_lastname: "-",
        sponsor: 203,
        placement: null,
        username: "Gabina1934",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3336770511",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "BERTHA ALICIA GARCIA LUNA",
        first_lastname: "-",
        sponsor: 204,
        placement: null,
        username: "Dana@105",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3234562888",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARIA GUADALUPE MAGAÑA MORALES",
        first_lastname: "-",
        sponsor: 203,
        placement: null,
        username: "Camila28$",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3332315364",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "GUADALUPE MARTINEZ PAZ",
        first_lastname: "-",
        sponsor: 206,
        placement: null,
        username: "Lupis@25",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6562150859",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ANTONIA CHACON",
        first_lastname: "-",
        sponsor: 207,
        placement: null,
        username: "Tony0322",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6561809509",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "VICTOR MANUEL CARO LUJAN",
        first_lastname: "-",
        sponsor: 207,
        placement: null,
        username: "Guadalupe2004$",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6561356207",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARGARITA MARTINEZ PAZ",
        first_lastname: "-",
        sponsor: 207,
        placement: null,
        username: "marga62",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "6621121970",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "JOSE ALBERTO GAYTAN MAGAÑA",
        first_lastname: "-",
        sponsor: 206,
        placement: null,
        username: "Adamaris28$",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3334630112",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MARTHA PATRICIA MORALES CHAVEZ",
        first_lastname: "-",
        sponsor: 203,
        placement: null,
        username: "Paty2021$",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3334960885",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "MA LUZ RIVAS CONTRERAS",
        first_lastname: "-",
        sponsor: 212,
        placement: null,
        username: "Malu$56",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
        phone: "3323381354",
        image_link:
          "https://wl-genial.cf.tsp.li/resize/728x/jpg/91b/430/964a9c5ac9933cc012d0bd80be.jpg",
      },
      {
        name: "ISABEL GARCIA LUNA",
        first_lastname: "-",
        sponsor: 212,
        placement: null,
        username: "Lalo40",
        password:
          "$2y$10$jf8LCZ8aOZd84z0ey3.G/.AdB0abFnkJ9djZPZgc4fWgBx2vf/Ypq",
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
