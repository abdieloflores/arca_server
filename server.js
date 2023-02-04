const express = require("express");
const cors = require("cors");
const app = express();
const session = require("express-session");
const { exec } = require("child_process");

global.__basedir = __dirname;

const cors_ = require("./app/config/cors.config");
let corsOptions = {
  origin: cors_.allowed_origins,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "nothing",
  })
);

const db = require("./app/models");

async function testConnection() {
  try {
    await db.sequelize.authenticate();

    await db.sequelize.sync();

    // drop the table if it already exists
    db.sequelize.sync({ force: true }).then(() => {
      exec("npx sequelize-cli db:seed:all", (error, stdout, stderr) => {
        console.log(error, stdout, stderr);
      });
    });

    console.log("Connected to Database.");
  } catch (e) {
    console.log(e.message);
  }
}

testConnection();

// Automation routes
require("./app/routes/automationRoutes/auth.routes")(app);
require("./app/routes/automationRoutes/social.routes")(app);
require("./app/routes/automationRoutes/authenticated.routes")(app);
require("./app/routes/automationRoutes/crud.routes")(app);
require("./app/routes/automationRoutes/where.routes")(app);
require("./app/routes/automationRoutes/file.routes")(app);
require("./app/routes/automationRoutes/email.routes")(app);
require("./app/routes/automationRoutes/rel.routes")(app);

// MLM routes
require("./app/routes/mlm/admin_roles.routes")(app);
require("./app/routes/mlm/admins.routes")(app);
require("./app/routes/mlm/auth.routes")(app);
require("./app/routes/mlm/banks.routes")(app);
require("./app/routes/mlm/categories.routes")(app);
// require("./app/routes/mlm/commission_types.routes")(app);
// require("./app/routes/mlm/commissions.routes")(app);
require("./app/routes/mlm/items.routes")(app); // Faltan de aquí para arriba de terminar en postman y sus controllers
require("./app/routes/mlm/levels.routes")(app);
require("./app/routes/mlm/order_details.routes")(app);
require("./app/routes/mlm/orders.routes")(app);
require("./app/routes/mlm/payment_methods.routes")(app);
require("./app/routes/mlm/periods.routes")(app);
require("./app/routes/mlm/settings.routes")(app);
require("./app/routes/mlm/user_levels.routes")(app);
require("./app/routes/mlm/users.routes")(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
