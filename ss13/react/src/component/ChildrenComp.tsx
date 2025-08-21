import React, { Component } from 'react';

interface Props {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default class Children extends Component<Props> {
  render() {
    const { id, name, price, quantity } = this.props;
    return (
      <div >
        <h3 style={{color: '#2c3e50', marginTop: 0}}>Thông tin sản phẩm:</h3>
        <p><strong>Id:</strong> {id}</p>
        <p><strong>Tên sản phẩm:</strong> {name}</p>
        <p><strong>Giá:</strong> {price.toLocaleString('vi-VN')} đ</p>
        <p><strong>Số lượng:</strong> {quantity}</p>
      </div>
    );
  }
}