import React, { Component } from 'react'
import '../css/StudentList.css'
const studentList:string[]=['Toán','Văn','Anh','Lý','Hoá','Sinh'];

export default class StudentList extends Component {
  render() {
    return (
      <div className="student-list-container">
        <h1>Danh sách môn học</h1>
        {studentList.map((s, idx) => (
          <div key={idx} className="student-item">
            {s}
          </div>
        ))}
      </div>
    )
  }
}
