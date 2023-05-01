import deleteIcon from "../assets/icons/delete.svg";
import done from "../assets/icons/done.svg";
export default function TodoItem({
  complited,
  id,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li className={complited == false ? "todo-item" : "todo-item done-todo"}>
      <span>{title}</span>
      <div className="Todo-controller">
        <input
          type="checkbox"
          className="todo-item-btn"
          checked={complited}
          id="checkbox"
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label className="done-label" htmlFor="checkbox">
          <img src={done} />
        </label>

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
