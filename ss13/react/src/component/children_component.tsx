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
      <div>
        <p>Id: {id}</p>
        <p>Product name: {name}</p>
        <p>Price: {price} đ</p>
        <p>Quantity: {quantity}</p>
      </div>
    );
  }
}