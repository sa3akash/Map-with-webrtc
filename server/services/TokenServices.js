const jwt = require("jsonwebtoken")
const { JWT_SEC } = require("../config")

exports.ganareteToken = (payload) => {
    return jwt.sign(payload,JWT_SEC,{expiresIn: "1h"})
}



