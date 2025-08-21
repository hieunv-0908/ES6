import React, { Component } from 'react';
import Children from './children_component';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface State {
  product: Product;
}

export default class Parent extends Component<{},State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: 'Bưởi trăm roi',
        price: 12000,
        quantity: 6
      }
    };
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <Children
          id={product.id} 
          name={product.name} 
          price={product.price} 
          quantity={product.quantity} 
        />
      </div>
    );
  }
}