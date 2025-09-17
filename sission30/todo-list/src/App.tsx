import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import NavbarTask from "./components/NavbarTask";

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "15px",
      gap: "5px",
      borderRadius: "12px",
      backgroundColor: "#fff",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)"
    }}>
      <Header />
      <InputTask tasks={tasks} setTasks={setTasks} />
      <NavbarTask />
      <div style={{display:"flex", gap:'10px'}}>
        <NavLink>Tất cả</NavLink>
        <NavLink>Đang làm</NavLink>
        <NavLink>Hoàn thành</NavLink>

      </div>
      <Outlet context={{ tasks, setTasks }} />
      <div>
        <button>Xoá tất cả</button>
        <button>Xoá công việc đã hoàn thành</button>
      </div>
    </div>
  );
}

export default App;
