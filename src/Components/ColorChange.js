import React from "react";
import clasess from "../App.module.css";
class ColorChange extends React.Component {
  state = {
    cls: clasess.red,
  };
  stylish = (e) => {
    this.setState({
      cls: e.target.value,
    });
  };
  stylishbut = (e) => {
    this.setState({
      cls: e,
    });
  };
  render() {
    let cls = [this.state.cls];
    return (
      <div>
        <p className={cls.join(" ")}>
          red blue green white yellow largefont{" "}
          <button onClick={() => this.stylishbut("clasess.blue")}>blue</button>
        </p>
        <input type="text" onChange={this.stylish} value={this.state.cls} />
      </div>
    );
  }
}

export default ColorChange;
