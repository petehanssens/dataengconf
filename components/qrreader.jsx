import React from "react";
import QrReader from "react-qr-scanner";

class QRScan extends React.Component {
  state = {
    delay: 100,
    result: "No result",
  };

  handleScan = (data) => {
    this.setState(
      {
        result: data,
      },
      console.log(this.state.result)
    );
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <p>Entering here</p>
        <QrReader
          delay={this.state.delay}
          //style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
      </div>
    );
  }
}

export default QRScan;
