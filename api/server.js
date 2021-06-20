const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require("./auth/auth-router");
const userRouter = require("./users/user-router");
const itemRouter = require("./items/items-router");
const requestRouter = require('./requests/request-router');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
server.use("/api/items", itemRouter);
server.use("/api/requests",requestRouter);

server.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        message:err.message
    })
})
module.exports = server

