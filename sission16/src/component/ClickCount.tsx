import React, { Component } from 'react'
interface typeState {
    count: number,
}
export default class ClickCount extends Component<{}, typeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <>
                <span>{this.state.count}</span>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>Click me</button>
            </>
        )
    }
}
