const db = require("../../models");
const Op = db.Sequelize.Op;

exports.findAnd = async (req, res) => {
  try {
    let condition = {
      where: {
        [Op.and]: req.body,
      },
      order: [["id", "DESC"]], // ASC, DESC
    };

    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);

    if (offset >= 0 && limit >= 0) {
      condition.offset = offset;
      condition.limit = limit;
    }

    const data = await db[req.params.document].findAll(condition);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findOr = async (req, res) => {
  try {
    let condition = {
      where: {
        [Op.or]: req.body,
      },
      order: [["id", "DESC"]], // ASC, DESC
    };

    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);

    if (offset >= 0 && limit >= 0) {
      condition.offset = offset;
      condition.limit = limit;
    }

    const data = await db[req.params.document].findAll(condition);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
