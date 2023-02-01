module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "order_details",
    {
      order_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      item_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      item_details: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      price: {
        type: "decimal(24,4) not null default 0",
      },
      points: {
        type: "decimal(24,4) not null default 0",
      },
      quantity: {
        type: "decimal(24,4) not null default 0",
      },
      discount_amount: {
        type: "decimal(24,4) not null default 0",
      },
      tax_amount: {
        type: "decimal(24,4) not null default 0",
      },
      total_points: {
        type: "decimal(24,4) not null default 0",
      },
      total_price: {
        type: "decimal(24,4) not null default 0",
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
