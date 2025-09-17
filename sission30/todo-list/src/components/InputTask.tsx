import React, { useState } from "react";
import axios from "axios";
import type { Task } from "../App";

interface InputTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function InputTask({ tasks, setTasks }: InputTaskProps) {
  const [valueInput, setValueInput] = useState("");

  const handleAddTask = async () => {
    if (!valueInput.trim()) return;
    try {
      const res = await axios.post("http://localhost:8080/tasks", {
        text: valueInput,
        completed: false,
      });
      setTasks([...tasks, res.data]);
      setValueInput("");
    } catch (error) {
      console.error("Thêm công việc thất bại!", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Nhập tên công việc"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        style={{
          width: "90%",
          height: "35px",
          padding: "0 8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleAddTask}
        style={{
          width: "96%",
          height: "35px",
          borderRadius: "6px",
          border: "none",
          background: "#4CAF50",
          color: "#fff",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Thêm công việc
      </button>
    </div>
  );
}

export default InputTask;
