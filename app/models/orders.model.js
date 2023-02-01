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
        type: "decimal(24,4) not null default 0",
      },
      points: {
        type: "decimal(24,4) not null default 0",
      },
      total: {
        type: "decimal(24,4) not null default 0",
      },
      discount_amount: {
        type: "decimal(24,4) not null default 0",
      },
      tax_amount: {
        type: "decimal(24,4) not null default 0",
      },
      payment_status: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "unpaid",
      },
      notes: {
        type: Sequelize.TEXT,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "buy",
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
