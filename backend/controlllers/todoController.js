const { createTodo, getTodos } = require("../models/todoModel");

async function getTodosRoute(req, res) {
  const todos = await getTodos();
  res.send(todos);
}
async function createTodoRoute(req, res) {
  const newTodo = req.body;
  const created = await createTodo(newTodo);
  res.send(created);
}

module.exports = { createTodoRoute, getTodosRoute };
