const db = require("../../models");
const { QueryTypes } = require("sequelize");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  try {
    const data = await db.users.create(req.body);
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
      order: [["user_id", "ASC"]],
    };
    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);

    if (offset >= 0 && limit >= 0) {
      condition.offset = offset;
      condition.limit = limit;
    }

    const data = await db.users.findAll(condition);
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
    const data = await db.users.findOne({
      where: {
        [Op.or]: [
          {
            user_id: id,
          },
          {
            username: id,
          },
        ],
      },
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

exports.findByUsername = async (req, res) => {
  try {
    const user = req.params.username;

    const data = await db.users.findAll({
      where: {
        username: user,
      },
    });

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with username ${user}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findAllByNode = async (req, res) => {
  try {
    const type = req.params.type;
    const id = req.params.id;

    if (!(type == "sponsor" || type == "placement")) {
      throw new Error(`Parameter ${type} invalid`);
    }
    let data;

    switch (type) {
      case "sponsor":
        data = await db.sequelize.query(
          "SELECT user_id, sponsor, placement, name FROM (SELECT * FROM users ORDER BY sponsor, user_id) products_sorted, ( SELECT @pv := $sponsor ) initialisation WHERE find_in_set(sponsor, @pv) AND length(@pv := concat(@pv, ',', user_id));",
          {
            bind: { sponsor: id },
            type: QueryTypes.SELECT,
          }
        );
        break;
      case "placement":
        data = await db.sequelize.query(
          "SELECT user_id, sponsor, placement, name FROM (SELECT * FROM users ORDER BY placement, user_id) products_sorted, ( SELECT @pv := $placement ) initialisation WHERE find_in_set(placement, @pv) AND length(@pv := concat(@pv, ',', user_id));",
          {
            bind: { placement: id },
            type: QueryTypes.SELECT,
          }
        );
        break;
      default:
        throw new Error(`Parameter invalid`);
    }

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
    const num = await db.users.update(req.body, {
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
    const num = await db.users.destroy({
      where: { user_id: id },
    });
    if (num == 1) {
      res.send({
        message: "Deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete with id ${id}.`,
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
    const num = await db.users.destroy({
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
