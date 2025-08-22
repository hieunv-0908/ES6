import React, { Component } from "react";

class GenderForm extends Component<{}, { gender: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      gender: "" 
    };
  }

  handleChange = (e) => {
    this.setState({ gender: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Giới tính: " + this.state.gender);
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <h3>Giới tính:</h3>

          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>

        {this.state.gender && <p>Giới tính được chọn: {this.state.gender}</p>}
      </div>
    );
  }
}

export default GenderForm;
