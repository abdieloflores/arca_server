module.exports = (sequelize, Sequelize) => {
  return sequelize.define(
    "users",
    {
      user_id: {
        type: Sequelize.BIGINT(20),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      first_lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      second_lastname: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sponsor: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        comment:
          "Es el usuario que registro a la persona. Su user_id no debe ser menor a el tuyo.",
      },
      placement: {
        type: Sequelize.BIGINT(20),
        comment:
          "Es tu usuario superior en la estructura de red. Su user_id no debe ser menor a el tuyo.",
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      phone: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      image_link: {
        type: Sequelize.STRING,
      },
      bank_id: {
        type: Sequelize.BIGINT(20),
      },
      bank_account:{
        type: Sequelize.BIGINT(20),
      },
      bank_card:{
        type: Sequelize.STRING
      },
      interbank_key: {
        type: Sequelize.STRING,
      },
      bank_branch: {
        type: Sequelize.STRING,
      },
      active: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
        comment:
          "Estatus para verificar si el usuario esta activo para cobrar comisiones.",
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
