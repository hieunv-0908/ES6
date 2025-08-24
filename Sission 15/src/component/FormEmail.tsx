import React, { Component, ChangeEvent, FormEvent } from "react";

interface State {
  email: string;
  submittedData: { email: string } | null;
}

export default class FormEmail extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      submittedData: null,
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault(); 
    this.setState({
      submittedData: { email: this.state.email },
    });
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email </label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Nhập email..."
          />
          <button type="submit">Submit</button>
        </form>

        <div style={{ marginTop: "16px" }}>
          <h3>Trước khi submit:</h3>
          <p>Email hiện tại: {this.state.email}</p>

          <h3>Sau khi submit:</h3>
          <pre>{this.state.submittedData && JSON.stringify(this.state.submittedData, null, 2)}</pre>
        </div>
      </div>
    );
  }
}
