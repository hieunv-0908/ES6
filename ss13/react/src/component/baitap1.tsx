import React, { Component } from 'react'

interface State{
  name: string;
}

export default class MyName extends Component<{},State> {
    constructor(props : {}) {
        super(props);
        this.state = {
            name: "Nguyen Van Hieu"
        };
    }
  render() {
    const { name } = this.state;
    return (
      <div>
        <p>Ho va ten: <b>{this.state.name}</b></p>
      </div>
    )
  }
}