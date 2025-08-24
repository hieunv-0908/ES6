import React, { Component } from 'react'
import HeaderStudentManage from './HeaderStudentManage'
import TableStudentManage from './TableStudentManage'
import Pagination from './Pagination';
export interface Student{
    name:string,
    id:number,
    born:string,
    email:string,
    status:boolean,
}
interface typeState{
    students:Student[],
}
export default class studentManage extends Component<{},typeState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            students:[{name:"Nguyễn Văn Hiếu",id:1,born:"09/08/2006",email:"hieu@gmail.com",status:true}],
        }
    }
  render() {
    return (
        <>
            <HeaderStudentManage></HeaderStudentManage>
            <TableStudentManage students = {this.state.students}></TableStudentManage>
            <Pagination students = {this.state.students}></Pagination>
        </>
    )
  }
}
