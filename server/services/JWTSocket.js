const jwt = require("jsonwebtoken");
const { JWT_SEC } = require("../config");

const verifyTokenSocket = async (socket, next) => {
    const token = socket.handshake.auth?.token;
    try{
        const user = await jwt.verify(token, JWT_SEC);
        socket.user = user
    }catch(err){
        const SocketError = new Error("Not authorized user")
        // socket.disconnect();
        return next(SocketError);
    }
    next()
}


module.exports = verifyTokenSocket;
