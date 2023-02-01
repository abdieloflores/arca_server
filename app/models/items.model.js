module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "items",
    {
      item_id: {
        type: Sequelize.BIGINT(20),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.BIGINT(20),
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      price: {
        type: "decimal(24,4) not null default 0",
      },
      points: {
        type: "decimal(24,4) not null default 0",
      },
      discount: {
        type: "decimal(24,4) not null default 0",
      },
      tax: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        default: 0,
      },
      status: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        default: 1,
      },
      created_at: {
        type: "datetime not null default current_timestamp",
      },
      updated_at: {
        type: "datetime on update current_timestamp default null",
      },
    },
    {
      freezeTableName: true,
      paranoid: true,
      deletedAt: "deleted_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
};
