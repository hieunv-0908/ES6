import React, { Component } from 'react';

interface Info {
  id: number;
  name: string;
  dob: string;
  address: string;
}

interface State {
  info: Info;
}

export default class Exercise02 extends Component <{},State>{
  constructor(props: object) {
    super(props);
    this.state = {
      info: {
        id: 1,
        name: 'Nguyen Van Hieu',
        dob: '09/08/2006',
        address: 'Hà Nội'
      }
    };
  }

  render() {
    const { info } = this.state;
    return (
      <div>
        <h2>Thông tin cá nhân</h2>
        <p>id: {info.id}</p>
        <p>Tên: {info.name}</p>
        <p>Ngày sinh: {info.dob}</p>
        <p>Địa chỉ: {info.address}</p>
      </div>
    );
  }
}