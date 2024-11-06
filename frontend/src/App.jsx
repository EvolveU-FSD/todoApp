import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./todo-form";

function App() {
  const [pageName, setPageName] = useState("List");

  return (
    <div className="page">
      <header className="header">
        <nav className="nav">
          <button onClick={() => setPageName("List")}>List</button>
          <button onClick={() => setPageName("Form")}>Form</button>
        </nav>
        <h1>My Todo {pageName}</h1>
      </header>
      {pageName === "List" ? <TodoList /> : <TodoForm />}
    </div>
  );
}

export default App;

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      console.log("data is", data);
      setTodos(data);
    };
    fetchTodos();
  }, []);
  return (
    <>
      <main>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>
              <h2>{todo.title}</h2>
              <input type="checkbox" checked={todo.done} />
              {todo.done ? (
                <p>
                  Complete on{" "}
                  {new Date(todo.dateComplete).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              ) : (
                <p>Not Completed</p>
              )}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
