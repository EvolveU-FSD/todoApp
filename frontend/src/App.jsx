import { useState } from "react";
import "./App.css";
import TodoForm from "./todo-form";
import { TodoList } from "./TodoList";

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
