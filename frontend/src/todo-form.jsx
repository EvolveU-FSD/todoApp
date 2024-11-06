import { useState } from "react";
import axios from "axios";
const TodoForm = () => {
  const [title, setTitle] = useState();
  const handleChange = (e) => {
    const newValue = e.target.value;
    setTitle(newValue);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send post request to "/api" with the task in the body as the title
    const response = await axios.post("/api", { title });
    const data = response.data;
    console.log("data", data);
  };
  return (
    <main>
      <form>
        <input
          onChange={handleChange}
          value={title}
          className="todo-form-input"
        />
        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </main>
  );
};

export default TodoForm;
