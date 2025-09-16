import React, { useEffect } from 'react'
import axios from "axios";
import { Student } from "./types";
function App() {
  // bai 4
  const getAllStudent = async () => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      console.log("Danh sách sinh viên:", response.data);
      return response.data;
    } catch (error) {
      console.error("Lỗi khi lấy danh sách sinh viên:", error);
    }
  };

  // bai 5
  const getStudentById = async (id: number): Promise<Student | void> => {
    try {
      const response = await axios.get<Student>(`http://localhost:3000/students/${id}`);

      if (response.data) {
        console.log("Thông tin sinh viên:", response.data);
        return response.data;
      } else {
        console.log("Không tìm thấy bản ghi");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        console.log("Không tìm thấy bản ghi");
      } else {
        console.error("Lỗi khi lấy thông tin sinh viên:", error);
      }
    }
  }

  // bai6
  const createStudent = async (student: Omit<Student, "id">): Promise<Student | void> => {
    try {
      const response = await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error("Failed to create student");
      }

      const data: Student = await response.json();
      console.log("Kết quả trả về từ server:", data);
      return data;
    } catch (error) {
      console.error("Lỗi khi thêm sinh viên:", error);
    }
  };

  useEffect(() => {
    getAllStudent();
  }, [])
  return (
    <div>App</div>
  )
}
}

export default App