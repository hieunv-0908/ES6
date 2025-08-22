import React, { Component } from 'react'

export default class Exersice03 extends Component<{}, { name: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Rekkei Academy"
    };
  }
  changeName = () => {
    this.setState({ name: "New Name" });
  };
  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}
