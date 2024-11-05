const { Todos } = require("./db");

// create
const createTodo = async (newTodo) => {
  const createdTodo = await Todos.create(newTodo);
  return createdTodo;
};
//read
const getTodos = async () => {
  const todos = await Todos.find();
  return todos;
};

module.exports = { createTodo, getTodos };
//update
// const updateTodo = async (id, updatedData) => {
//   const updatedTodo = await Todos.findByIdAndUpdate(id, updatedData);
//   return updatedTodo;
// };
// //delete
// const deleteTodo = async (id) => {
//   const deleted = await Todos.findByIdAndDelete(id);
//   return deleted;
// };
