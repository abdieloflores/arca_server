module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "user_levels",
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
      level_id: {
        type: Sequelize.BIGINT(20),
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
