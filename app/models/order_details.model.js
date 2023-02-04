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
      quantity: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      total_points: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      discount_amount: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      tax_amount: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      total_price: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
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
