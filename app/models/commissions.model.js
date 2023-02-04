module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "commissions",
    {
      user_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      period_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      commission_type_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      commission_details: {
        type: Sequelize.JSON,
      },
      total_points: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      total_sales: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      amount: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      tax_amount: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.DECIMAL(24, 4),
        allowNull: false,
        defaultValue: 0,
      },
      payment_status: {
        type: Sequelize.ENUM("unpaid", "pending", "rejected", "paid"),
        allowNull: false,
        defaultValue: "unpaid",
      },
      payment_date: {
        type: Sequelize.DATE,
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
