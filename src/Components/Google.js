import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
class Google extends Component {
  render() {
    const mystyles = {
      width: "1000px",
      height: "500px",
    };
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={mystyles}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(Google);
