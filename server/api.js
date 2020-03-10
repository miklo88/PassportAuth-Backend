// EXPRESS MIDDLEWARE
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
//API ROOT
const apiRouter = require("../routers/api-router");
// AUTH ROUTER
const authRouter = require("../routers/auth-router");
// USER ROUTER
const usersRouter = require("../routers/users-router");
// // BLOG ROUTER
// const blogRouter = require("../routers/blog-router");

// EXPRESS MIDDLEWARE SERVER
const server = express();

server.use(helmet());
server.use(morgan("short"));
server.use(cors());
server.use(express.json());

// ROOT ROUTE
server.use("/", apiRouter);
// API ROUTE
server.use("/api", apiRouter);
// AUTH ROUTE
server.use("/api/auth", authRouter);
// // USER ROUTE
server.use("/api/users", usersRouter);
// // BLOG ROUTE
// server.use("/api/blog", blogRouter);

// ERR ROUTE
server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "whoopsies.you are in your serverjs file err 500"
  });
});

module.exports = server;
