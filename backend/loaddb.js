const { createTodo } = require("./models/todoModel");

for (let i = 0; i < 10; i++) {
  createTodo({
    title: `todo ${i}`,
    completed: false,
  });
}
