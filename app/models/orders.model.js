module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "orders",
    {
      order_id: {
        type: Sequelize.BIGINT(20),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
      },
      period_id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      points: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      total: {
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
      payment_status: {
        type: Sequelize.ENUM("unpaid", "pending", "rejected", "paid"),
        allowNull: false,
        defaultValue: "unpaid",
      },
      payment_method_id: {
        type: Sequelize.BIGINT(20),
      },
      type: {
        type: Sequelize.ENUM("buy", "enrollment", "re-enrollment"),
        allowNull: false,
        defaultValue: "buy",
      },
      payment_image: {
        type: Sequelize.STRING,
      },
      notes: {
        type: Sequelize.TEXT,
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
