import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeUser } from "./FakeUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (
      email === fakeUser.email &&
      password === fakeUser.password &&
      role === fakeUser.role
    ) {
      localStorage.setItem("isAuth", "true");
      navigate("/account");
    } else {
      setError("Thông tin đăng nhập không chính xác!");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "0 auto" }}>
      <h2>Đăng nhập</h2>
      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ display: "block", width: "100%", margin: "8px 0" }}
      >
        <option value="">-- Chọn quyền --</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
      </select>
      <button onClick={handleLogin} style={{ width: "100%" }}>
        Đăng nhập
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
