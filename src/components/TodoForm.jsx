import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem === "") return;
    addTodo(todoItem);
    setTodoItem("");
  };
  return (
    <form className="new-todo-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          id="item"
          placeholder="my task"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button className="btn">Add</button>
      </div>
    </form>
  );
}
