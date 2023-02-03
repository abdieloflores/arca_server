const db = require("../../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  try {
    const data = await db.user_levels.create(req.body);
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
      order: [
        ["user_id", "ASC"],
        ["period_id", "ASC"],
      ],
    };
    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);

    if (offset >= 0 && limit >= 0) {
      condition.offset = offset;
      condition.limit = limit;
    }

    const data = await db.user_levels.findAll(condition);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findByUser = async (req, res) => {
  try {
    const user = req.params.user;

    const data = await db.user_levels.findAll({
      where: {
        user_id: user,
      },
    });

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with user_id ${user}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findByUserPeriod = async (req, res) => {
  try {
    const user = req.params.user;
    const period = req.params.period;

    const data = await db.user_levels.findAll({
      where: {
        user_id: user,
        period_id: period,
      },
    });

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with user_id ${user} and period ${period}.`,
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
    const user = req.params.user;
    const period = req.params.period;

    const num = await db.user_levels.update(
      { level_id: req.body.level_id },
      {
        where: { user_id: user, period_id: period },
      }
    );

    if (num == 1) {
      res.send({
        message: "Updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update with user_id ${user} and period_id ${period}.`,
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
    const user = req.params.user;
    const period = req.params.period;

    const num = await db.user_levels.destroy({
      where: { user_id: user, period_id: period },
    });
    if (num == 1) {
      res.send({
        message: "Deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete with user_id ${user} and period_id ${period}.`,
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
    const num = await db.user_levels.destroy({
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
