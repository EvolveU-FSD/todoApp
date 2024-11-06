const mongoose = require("../db");
const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false },
  dateComplete: { type: Date },
});
const Todos = mongoose.model("todo", todoSchema);

const createTodo = async (newTodo) => {
  const createdTodo = await Todos.create(newTodo);
  return createdTodo;
};

const getTodos = async () => {
  const todos = await Todos.find();
  return todos;
};

const updateTodo = async (id, updatedData) => {
  const updatedTodo = await Todos.findByIdAndUpdate(id, updatedData);
  return updatedTodo;
};

const deleteTodo = async (id) => {
  const deleted = await Todos.findByIdAndDelete(id);
  return deleted;
};

module.exports = { deleteTodo, createTodo, getTodos, updateTodo };
