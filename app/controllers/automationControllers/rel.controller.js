const db = require("../../models");
const Op = db.Sequelize.Op;

exports.findAll = async (req, res) => {
  try {
    let condition = {
      order: [["id", "DESC"]], // ASC, DESC
      include: [req.params.document2],
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

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;

    let condition = {
      include: [req.params.document2],
    };

    const data = await db[req.params.document].findByPk(id, condition);
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
