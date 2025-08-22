import React, { Component } from 'react'

export default class UserName extends Component<{}, { name: string }> {
    constructor(props:{}) {
        super(props);
        this.state = {
            name: ""
        };
    }
    componentDidMount(): void {
        this.setState({name:"Nguyễn Văn Hiếu"})   
    }
    handleChange = () => {
        this.setState({name:"Nguyễn Văn A"});
    }
  render() {
    return (
        <>
            <div>{this.state.name}</div>
            <button onClick={this.handleChange}>Change Name</button>
        </>
    )
  }
}
