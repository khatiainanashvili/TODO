import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";
export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          complited: false,
        },
      ];
    });
  }
  function toggleTodo(id, complited) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complited };
        }
        return todo;
      });
    });
  }
  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div className="todo-container">
      <div className="todo">
        <h2>Add Your Daily Tasks</h2>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
