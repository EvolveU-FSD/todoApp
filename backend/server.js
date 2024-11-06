const express = require("express");

const { getTodos, createTodo } = require("./todoController");
const apiRouter = require("./routes/api");
const PORT = 7777;

const app = express();
app.use(express.json());
app.use(express.static("../frontend/dist"));
app.use("/api", apiRouter);

app.listen(PORT, () => console.log("listening on ", PORT));
