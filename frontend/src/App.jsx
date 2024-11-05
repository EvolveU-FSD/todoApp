import { useEffect, useState } from "react";
import "./App.css";

function App() {
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
    <div className="page">
      <header className="header">
        <h1>My Todo List </h1>
      </header>
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
    </div>
  );
}

export default App;
