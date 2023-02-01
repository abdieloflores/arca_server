module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "commissions",
    {
      period_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.BIGINT(20),
        primaryKey: true,
        allowNull: false,
      },
      commission_type_id: {
        type: Sequelize.TINYINT(1),
        primaryKey: true,
        allowNull: false,
      },
      total_points: {
        type: "decimal(24,4) not null default 0",
      },
      total_sales: {
        type: "decimal(24,4) not null default 0",
      },
      amount: {
        type: "decimal(24,4) not null default 0",
      },
      tax_amount: {
        type: "decimal(24,4) not null default 0",
      },
      total: {
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
