import React, { Component } from 'react'
import '../css/headerStudentManage.css'

export default class HeaderStudentManage extends Component {
  render() {
    return (
      <>
        <header>
            <div id='headerElement1'>
                <h2 >Quản lý sinh viên</h2>
                <button>Thêm mới sinh viên</button>
            </div>
            <div id='headerElement2'>
                <select name="" id="">
                    <option value="ageSort">Tuổi</option>
                </select>
                <input type="text" placeholder='Tìm kiếm từ khoá theo tên.' />
            </div>
        </header>
      </>
    )
  }
}
