import React, { useReducer, useEffect, useState } from "react";

const init = () => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

const ACTIONS = {
  ADD_TODO: "add_todo",
  DELETE_TODO: "delete_todo",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.DELETE_TODO:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export default function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, [], init);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (input.trim() === "") return;
    dispatch({ type: ACTIONS.ADD_TODO, payload: input });
    setInput("");
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa công việc này?");
    if (confirmDelete) {
      dispatch({ type: ACTIONS.DELETE_TODO, payload: index });
    }
  };

  return (
    <div style={{ width: "350px", margin: "30px auto", fontFamily: "Arial" }}>
      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAdd} style={{ marginLeft: "5px", padding: "8px" }}>
          Thêm
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
              border: "1px solid #ddd",
              marginBottom: "5px",
              borderRadius: "5px",
            }}
          >
            <span>{todo}</span>
            <button
              onClick={() => handleDelete(index)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
