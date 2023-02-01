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

db.tokens = require("./tokens.model.js")(sequelize, Sequelize);
db.levels = require("./levels.model.js")(sequelize, Sequelize);
db.banks = require("./banks.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize, Sequelize);
db.periods = require("./periods.model.js")(sequelize, Sequelize);
db.user_levels = require("./user_levels.model.js")(sequelize, Sequelize);
db.commissions = require("./commissions.model.js")(sequelize, Sequelize);
db.commission_types = require("./commission_types.model.js")(
  sequelize,
  Sequelize
);
db.categories = require("./categories.model.js")(sequelize, Sequelize);
db.items = require("./items.model.js")(sequelize, Sequelize);
db.orders = require("./orders.model.js")(sequelize, Sequelize);
db.order_details = require("./order_details.model.js")(sequelize, Sequelize);
db.settings = require("./settings.model.js")(sequelize, Sequelize);
db.admins = require("./admins.model.js")(sequelize, Sequelize);
db.admin_roles = require("./admin_roles.model.js")(sequelize, Sequelize);
db.payment_methods = require("./payment_methods.model.js")(
  sequelize,
  Sequelize
);

//Relationship users
db.users.belongsTo(db.banks, { foreignKey: "bank_id" });
db.banks.hasMany(db.users, { foreignKey: "bank_id" });

//Relationship user_levels
db.user_levels.belongsTo(db.users, { foreignKey: "user_id" });
db.users.hasMany(db.user_levels, { foreignKey: "user_id" });

db.user_levels.belongsTo(db.periods, { foreignKey: "period_id" });
db.periods.hasMany(db.user_levels, { foreignKey: "period_id" });

db.user_levels.belongsTo(db.levels, { foreignKey: "level_id" });
db.levels.hasMany(db.user_levels, { foreignKey: "level_id" });

//Relationship commissions
db.commissions.belongsTo(db.users, { foreignKey: "user_id" });
db.users.hasMany(db.commissions, { foreignKey: "user_id" });

db.commissions.belongsTo(db.periods, { foreignKey: "period_id" });
db.periods.hasMany(db.commissions, { foreignKey: "period_id" });

db.commissions.belongsTo(db.commission_types, {
  foreignKey: "commission_type_id",
});
db.commission_types.hasMany(db.commissions, {
  foreignKey: "commission_type_id",
});

//Relationship items
db.items.belongsTo(db.categories, { foreignKey: "category_id" });
db.categories.hasMany(db.items, { foreignKey: "category_id" });

//Relationship orders
db.orders.belongsTo(db.users, { foreignKey: "user_id" });
db.users.hasMany(db.orders, { foreignKey: "user_id" });

db.orders.belongsTo(db.payment_methods, { foreignKey: "payment_method_id" });
db.payment_methods.hasMany(db.orders, { foreignKey: "payment_method_id" });

//Relationship orders_detail
db.order_details.belongsTo(db.orders, { foreignKey: "order_id" });
db.orders.hasMany(db.order_details, { foreignKey: "order_id" });

db.order_details.belongsTo(db.items, { foreignKey: "item_id" });
db.items.hasMany(db.order_details, { foreignKey: "item_id" });

//Relationship admins
db.admins.belongsTo(db.admin_roles, { foreignKey: "admin_role_id" });
db.admin_roles.hasMany(db.admins, { foreignKey: "admin_role_id" });

module.exports = db;
