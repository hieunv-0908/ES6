import React, { Component } from 'react'
import type { Student } from '../component/studentManage'
import '../css/TableStudentManage.css'

export default class TableStudentManage extends Component<{students:Student[]}> {
  constructor(props:{students:Student[]}) {
    super(props);
  }
  render() {
    return (
      <table className="student-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {this.props.students.map((s, index) => {
            return (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.id < 10 ? `SV00${s.id}`: (s.id < 100) ? `SV0${s.id}` : `SV${s.id}`}</td>
                <td>{s.name}</td>
                <td>{s.born}</td>
                <td>{s.email}</td>
                <td>
                  {s.status === true ? (
                    <span className="status active">Đang hoạt động</span>
                  ) : (
                    <span className="status inactive">Ngừng hoạt động</span>
                  )}
                </td>
                <td className="actions">
                  <button className="btn btn-block">Chặn</button>
                  <button className="btn btn-edit">Sửa</button>
                  <button className="btn btn-delete">Xoá</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
