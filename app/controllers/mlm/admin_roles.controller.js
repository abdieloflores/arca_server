const db = require("../../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  try {
    const data = await db.admins_roles.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    let condition = {
      order: [["admin_id", "ASC"]],
    };
    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);

    if (offset >= 0 && limit >= 0) {
      condition.offset = offset;
      condition.limit = limit;
    }

    const data = await db.admins_roles.findAll(condition);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await db.admins_roles.findByPk(id, {
      attributes: { exclude: ["password"] },
    });
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with id ${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const num = await db.admins_roles.update(req.body, {
      where: { user_id: id },
    });
     
    if (num == 1) {
      res.send({
        message: "Updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update with id ${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const num = await db.admins_roles.destroy({
      where: { id: id },
    });
    if (num == 1) {
      res.send({
        message: "Deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    const num = await db.admins_roles.destroy({
      where: {},
      truncate: false,
    });
    res.send({
      message: `${num} has been deleted.`,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
