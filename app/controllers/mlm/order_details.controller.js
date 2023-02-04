const db = require("../../models");
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  try {
    const data = await db.order_details.create(req.body);
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
        ["order_id", "ASC"],
        ["item_id", "ASC"],
      ],
    };
    let offset = parseInt(req.query.offset);
    let limit = parseInt(req.query.limit);

    if (offset >= 0 && limit >= 0) {
      condition.offset = offset;
      condition.limit = limit;
    }

    const data = await db.order_details.findAll(condition);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findByOrder = async (req, res) => {
  try {
    const order = req.params.order;

    const data = await db.order_details.findAll({
      where: {
        order_id: order,
      },
    });

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with order_id ${order}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.findByOrderItem = async (req, res) => {
  try {
    const order = req.params.order;
    const item = req.params.item;

    const data = await db.order_details.findAll({
      where: {
        order_id: order,
        item_id: item,
      },
    });

    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find with order_id ${order} and item ${item}.`,
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
    const order = req.params.order;
    const item = req.params.item;

    const num = await db.order_details.update(req.body, {
      where: { order_id: order, item_id: item },
    });

    if (num == 1) {
      res.send({
        message: "Updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update with order_id ${order} and item_id ${item}.`,
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
    const order = req.params.order;
    const item = req.params.item;

    const num = await db.order_details.destroy({
      where: { order_id: order, item_id: item },
    });
    if (num == 1) {
      res.send({
        message: "Deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete with order_id ${order} and item_id ${item}.`,
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
    const num = await db.order_details.destroy({
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
