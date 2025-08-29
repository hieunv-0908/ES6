import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@domain\.com$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Trường này là bắt buộc";
    }

    if (!email.trim()) {
      newErrors.email = "Trường này là bắt buộc";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email không hợp lệ";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Đăng ký thông tin</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>Họ tên:</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.name && (
          <p style={{ color: "red", marginTop: "5px" }}>{errors.name}</p>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />
        {errors.email && (
          <p style={{ color: "red", marginTop: "5px" }}>{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Gửi
      </button>
    </form>
  );
}

export default RegistrationForm;