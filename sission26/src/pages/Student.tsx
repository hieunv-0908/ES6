import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Student() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const studentName = searchParams.get("studentName");

  return (
    <div>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          navigate(`/student?studentName=${value}`);
        }}
      >
        Tìm kiếm
      </button>

      {studentName && <p>Kết quả tìm kiếm: {studentName}</p>}
    </div>
  );
}
