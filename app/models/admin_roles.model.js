module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "admin_roles",
    {
      admin_role_id: {
        type: Sequelize.BIGINT(20),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modules: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "[]",
        comment:
          "Se debe guardar un array en string para leerlo correctamente.",
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
