import { useState, useEffect } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos");
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
