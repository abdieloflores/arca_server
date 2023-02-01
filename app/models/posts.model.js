module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "posts",
    {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { args: true, msg: "You must enter a title" },
        },
      },
      description: {
        type: Sequelize.STRING,
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
