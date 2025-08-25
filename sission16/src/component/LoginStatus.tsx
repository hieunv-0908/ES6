import React, { Component } from 'react'
import '../css/LoginStatus.css'
interface typeState {
    isLoggedIn: boolean,
}
export default class LoginStatus extends Component<{}, typeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
    render() {
        return (
            <div className="login-card">
                <h1>
                    {this.state.isLoggedIn === false ?
                        <span style={{color:'white'}}>🔒 Vui lòng đăng nhập để tiếp tục</span> :
                        <span style={{color:'while'}}>✅ Xin chào, User!</span>
                    }
                </h1>
                <button onClick={() => {
                    this.setState({
                        isLoggedIn: !this.state.isLoggedIn,
                    })
                }}>
                    {this.state.isLoggedIn === false ? 'Đăng nhập' : 'Đăng xuất'}
                </button>
            </div>
        )
    }
}
