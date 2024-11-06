const express = require("express");
const todoRouter = require("./todoRoutes");
const apiRouter = express.Router();

apiRouter.use("/todos", todoRouter);

module.exports = apiRouter;
