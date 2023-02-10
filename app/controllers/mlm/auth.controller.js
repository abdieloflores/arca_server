const jwt = require("../../helpers/jwt");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = require("../../models");
const Op = db.Sequelize.Op;

exports.loginUserAuth = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({
        message: "Nombre de usuario y contraseña requeridos.",
      });
      return;
    }

    let condition = {
      where: {
        [Op.or]: [
          {
            username: req.body.username,
          },
          // {
          //   email: req.body.username,
          // },
        ],
      },
    };

    const data = await db.users.findOne(condition);

    if (!data) {
      res.status(400).send({
        message: "Nombre de usuario no encontrado.",
      });
    } else {
      const match = await bcrypt.compare(req.body.password, data.password);
      if (match) {
        res.send({
          token: jwt.accessTokenEncode(data),
        });
      } else {
        res.status(400).send({
          message: "Contraseña incorrecta",
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.loginAdminAuth = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      res.status(400).send({
        message: "Nombre de usuario y contraseña requeridos.",
      });
      return;
    }

    let condition = {
      where: {
        [Op.or]: [
          {
            username: req.body.username,
          },
          {
            email: req.body.username,
          },
        ],
      },
    };

    const data = await db.admins.findOne(condition);

    if (!data) {
      res.status(400).send({
        message: "Nombre de usuario no encontrado.",
      });
    } else {
      const match = await bcrypt.compare(req.body.password, data.password);
      if (match) {
        res.send({
          access_token: jwt.accessTokenEncode(data.id),
          refresh_token: jwt.refreshTokenEncode(data.id),
          user: data,
        });
      } else {
        res.status(400).send({
          message: "Contraseña incorrecta",
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.first_lastname ||
      !req.body.username ||
      !req.body.password ||
      !req.body.sponsor
    ) {
      res.status(400).send({
        message: "Datos incompletos para el registro",
      });
      return;
    }

    let condition = {
      where: {
        [Op.or]: [
          {
            email: req.body.email,
          },
          {
            username: req.body.username,
          },
        ],
      },
    };

    const user = await db.users.findOne(condition);

    if (user) {
      res.status(400).send({
        message: "El correo o el nombre de usuario ya están en uso.",
      });
    } else {
      bcrypt.hash(req.body.password, saltRounds, async function (error, hash) {
        req.body.password = hash;
        const users = new db.users(req.body);
        const data = await users.save(users);

        res.send({
          access_token: jwt.accessTokenEncode(data.id),
          refresh_token: jwt.refreshTokenEncode(data.id),
          user: data,
        });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.message,
    });
  }
};

exports.accessToken = async (req, res) => {
  if (!req.body.access_token) {
    res.status(400).send({
      message: "Access token is required.",
    });
    return;
  }

  jwt.accessTokenDecode(async function (e) {
    if (e.status) {
      try {
        const user = await db.users.findByPk(e.data.id);
        if (!user) {
          res.status(404).send({
            message: "No user found.",
          });
        } else {
          res.send(user);
        }
      } catch (error) {
        res.status(500).send({
          message: error.message || "Something went wrong.",
        });
      }
    } else {
      res.status(e.code).send({
        message: e.message,
      });
    }
  }, req.body.access_token);
};

exports.refreshToken = async (req, res) => {
  if (!req.body.refresh_token) {
    res.status(400).send({
      message: "Refresh token is required.",
    });
    return;
  }

  jwt.refreshTokenDecode(function (e) {
    if (e.status) {
      res.send({
        access_token: jwt.accessTokenEncode(e.data.id),
        refresh_token: jwt.refreshTokenEncode(e.data.id),
      });
    } else {
      res.status(e.code).send({
        message: e.message,
      });
    }
  }, req.body.refresh_token);
};

exports.resetPassword = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.token) {
      res.status(400).send({
        message: "Email & Password & Verification code is required.",
      });
      return;
    }

    let condition = {
      where: {
        [Op.and]: [
          {
            email: req.body.email,
          },
          {
            token: req.body.token,
          },
        ],
      },
    };

    const token_data = await db.tokens.findOne(condition);

    if (!token_data) {
      res.status(400).send({
        message: "Verification code is invalid.",
      });
    } else {
      bcrypt.hash(req.body.password, saltRounds, async function (error, hash) {
        req.body.password = hash;
        const data = await db.users.update(
          { password: req.body.password },
          { where: { email: req.body.email } }
        );

        await db.tokens.destroy({
          where: { id: token_data.id },
        });

        res.send({
          message: "Password has been updated. Now you can login.",
        });
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};
