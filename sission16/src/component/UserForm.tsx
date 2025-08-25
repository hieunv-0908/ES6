import React, { Component } from 'react'

interface typeState {
  name: string,
  email: string,
  age: number,
  error: string,
  showInfo: boolean,
}

export default class UserForm extends Component<{}, typeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: '',
      email: '',
      age: 0,
      error: '',
      showInfo: false,
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: name === "age" ? Number(value) : value
    } as unknown as typeState);
  }

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, age } = this.state;

    if (!email.includes("@")) {
      this.setState({ error: "Email không hợp lệ", showInfo: false });
      return;
    }
    if (age < 0) {
      this.setState({ error: "Tuổi không được âm", showInfo: false });
      return;
    }

    this.setState({ error: "", showInfo: true });
  }

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      age: 0,
      error: '',
      showInfo: false,
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Nhập thông tin người dùng</h2>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />

          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
          <br />

          <div>
            <button type="submit">Gửi</button>
            <button type="button" onClick={this.handleReset}>Xoá tất cả</button>
          </div>

          {this.state.error && (
            <span style={{ color: "red" }}>{this.state.error}</span>
          )}
        </form>

        {this.state.showInfo && (
          <div>
            <h2>Thông tin đã nhập:</h2>
            <p><b>Họ và tên:</b> {this.state.name}</p>
            <p><b>Email:</b> {this.state.email}</p>
            <p><b>Tuổi:</b> {this.state.age}</p>
          </div>
        )}
      </>
    )
  }
}
