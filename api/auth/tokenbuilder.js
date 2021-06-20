const { JWT_SECRECT } = require("../config/secrect");
const jwt = require("jsonwebtoken");

module.exports = function (user) {
    const payload = {
        subject: user.user_id,
        username: user.username
    }
    const options = {
        expiresIn: "1"
    }
    return jwt.sign(
        payload,
        JWT_SECRECT,
        options
    );
}
