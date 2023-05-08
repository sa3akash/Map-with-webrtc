const http = require('http');
require("dotenv").config()
const app = require("./app");
const connectServerToSocket = require('./socket/socketServer');
const server = http.createServer(app)
// socket initialization
connectServerToSocket(server)
require("peer").PeerServer({port:9000, path:"/peer"})




const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>console.log(`Server listening on ${PORT}`));