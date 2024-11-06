const express = require("express");
const {
  createTodoRoute,
  getTodosRoute,
} = require("../controlllers/todoController");
const todoRouter = express.Router();

todoRouter.get("/", getTodosRoute);
todoRouter.post("/", createTodoRoute);

module.exports = todoRouter;
