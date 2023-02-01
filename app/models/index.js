require("dotenv").config();

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    operatorsAliases: 0,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// This model is required. Please don't delete.
db.tokens = require("./tokens.model.js")(sequelize, Sequelize);
//---------
db.posts = require("./posts.model.js")(sequelize, Sequelize);
db.comments = require("./comments.model.js")(sequelize, Sequelize);

db.levels = require("./levels.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.periods = require("./periods.model.js")(sequelize, Sequelize);
db.user_levels = require("./user_levels.model.js")(sequelize, Sequelize);
db.commissions = require("./commissions.model.js")(sequelize, Sequelize);
db.commission_types = require("./commission_types.model.js")(sequelize, Sequelize);
db.categories = require("./categories.model.js")(sequelize, Sequelize);
db.items = require("./items.model.js")(sequelize, Sequelize);
db.orders = require("./orders.model.js")(sequelize, Sequelize);
db.order_details = require("./order_details.model.js")(sequelize, Sequelize);
db.settings = require("./settings.model.js")(sequelize, Sequelize);

/**
Create relationship
 - Posts have many comments
 - Comment have only one post
*/

db.posts.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.posts, {
  foreignKey: "postId",
  as: "posts",
});
// ----------------------------

module.exports = db;
