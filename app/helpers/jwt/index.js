require("dotenv").config();

const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "l7iQbjuJ4xv77EJH";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "iY7kRW55dq2keNfD";

// expiresIn // Eg: 60, "2 days", "10h", "7d".
// default ("120" is equal to "120ms").

exports.accessTokenEncode = function accessTokenEncode(user, type) {
  const token = jwt.sign(
    {
      user_id: user.user_id,
      user: user,
      type: type,
    },
    ACCESS_TOKEN_SECRET,
    {
      expiresIn: "30 days",
    }
  );
  return token;
};

exports.refreshTokenEncode = function refreshTokenEncode(user_id) {
  const token = jwt.sign(
    {
      id: user_id,
    },
    REFRESH_TOKEN_SECRET,
    {
      expiresIn: "30 days",
    }
  );
  return token;
};

exports.accessTokenDecode = function accessTokenDecode(fn, access_token) {
  try {
    let decoded = jwt.verify(access_token, ACCESS_TOKEN_SECRET);
    fn({
      status: true,
      data: decoded,
    });
  } catch (error) {
    fn({
      status: false,
      message: error.message,
      code: 403,
    });
  }
};

exports.refreshTokenDecode = function refreshTokenDecode(fn, refresh_token) {
  try {
    let decoded = jwt.verify(refresh_token, REFRESH_TOKEN_SECRET);
    fn({
      status: true,
      data: decoded,
    });
  } catch (error) {
    fn({
      status: false,
      message: error.message,
      code: 403,
    });
  }
};
