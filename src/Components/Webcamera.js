import React, { Component } from "react";
import Webcam from "react-webcam";
import Imgs from "./Imgs";
const arr = [];
class Webcamera extends Component {
  state = {
    cap: [],
  };
  myRef = React.createRef();

  componentDidMount = () => {
    arr.push(this.myRef.current.getScreenshot());
    console.log(arr);
    let ar = [...arr];
    this.setState({
      cap: ar,
    });
  };

  render() {
    const imgs = this.state.cap.map((e) => {
      return <Imgs src={e} />;
    });
    const videoConstraints = {
      width: 580,
      height: 720,
      facingMode: "user",
    };
    return (
      <div>
        <Webcam
          audio={false}
          ref={this.myRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <br></br>
        <button onClick={this.componentDidMount}>on capture</button>
        <div>{imgs}</div>
      </div>
    );
  }
}

export default Webcamera;
