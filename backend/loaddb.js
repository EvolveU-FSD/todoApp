const { createTodo } = require("./todoController");

for (let i = 0; i < 10; i++) {
  createTodo({
    title: `todo ${i}`,
    completed: false,
  });
}
