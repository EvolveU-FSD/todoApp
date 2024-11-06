const express = require("express");

const { getTodos, createTodo } = require("./todoController");
const PORT = 7777;

const app = express();
app.use(express.json());

app.get("/", getTodosRoute);
app.post("/", createTodoRoute);

app.listen(PORT, () => console.log("listening on ", PORT));

async function getTodosRoute(req, res) {
  const todos = await getTodos();
  res.send(todos);
}
async function createTodoRoute(req, res) {
  const newTodo = req.body;
  const created = await createTodo(newTodo);
  res.send(created);
}
