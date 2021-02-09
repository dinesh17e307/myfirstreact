import React, { Component } from "react";
import "./Style.css";
class Dynamicchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: "",
      n2: "",
      date: "",
    };
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>value from parent</th>
            </tr>
            <tr>
              <td>{this.props.val.name1}</td>
              <td>{this.props.val.name2}</td>
              <td>{this.props.val.date}</td>
            </tr>
          </tbody>
        </table>

        <input
          type="text"
          onChange={(e) => {
            this.setState({ n1: e.target.value });
          }}
          value={this.state.n1}
        />
        <input
          type="text"
          onChange={(e) => {
            this.setState({ n2: e.target.value });
          }}
          value={this.state.n2}
        />
        <input
          type="date"
          onChange={(e) => {
            this.setState({ date: e.target.value });
          }}
          value={this.state.date}
        />
        <button onClick={() => this.props.changed(this.state)}>
          to send the data to parent
        </button>

        <table
          className="table"
          cellPadding="2px"
          cellSpacing="3px"
          border="2px"
        >
          <tbody>
            <tr>
              <th>values from two way binding</th>
            </tr>
            <tr>
              <td>{this.state.n1}</td>
            </tr>
            <tr>
              <td>{this.state.n2}</td>
            </tr>
            <tr>
              <td>{this.state.date}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Dynamicchange;
