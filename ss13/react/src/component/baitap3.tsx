

import React, { Component } from 'react';

interface User {
  id: number;
  name: string;
  age: number;
  address?: string;
}

interface State {
  users: User[];
}

export default class Exercise03 extends Component <{},State>{
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'John', age: 30, address: 'Address 1' },
        { id: 2, name: 'Mary', age: 25, address: 'Address 2' },
        { id: 3, name: 'Jane', age: 20, address: 'Address 3' }
      ]
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Danh sách người dùng</h2>
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Id</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}