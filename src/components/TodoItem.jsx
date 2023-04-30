import deleteIcon from "../assets/icons/delete.svg";
export default function TodoItem({
  complited,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className={complited == false ? " todo-item" : "todo-item done-todo"}>
      <span>{title}</span>
      <div className="Todo-controller">
        <input
          type="checkbox"
          className="todo-item-btn  done"
          checked={complited}
          id="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />

        <button
          onClick={() => deleteTodo(id)}
          className="todo-item-btn delete-btn"
        >
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </div>
    </li>
  );
}
