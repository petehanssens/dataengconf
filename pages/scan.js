import React, { useState } from "react";

import QRScan from "../components/qrreader";

export default function App() {
  const [faceMode, setFaceMode] = useState("user");

  const cameraButtonClick = (f) => {
    if (f === "environment") {
      setFaceMode("user");
    } else {
      setFaceMode("environment");
    }
  };

  const QRWithRearCam = () => {
    return (
      <QRScan
        constraints={{
          facingMode: faceMode,
        }}
      />
    );
  };

  const loadCameraPermissions = () => {
    let params = {
      audio: true,
      video: { facingMode: { exact: faceMode } },
    };
    global.navigator.mediaDevices.getUserMedia(params).then((stream) => {
      stream.getTracks().forEach((track) => {
        console.log(track);
      });
    });
  };

  return (
    <div>
      {loadCameraPermissions()}
      <h1>Hello QR Code Reader</h1>
      <button onClick={() => cameraButtonClick(faceMode)}>{faceMode}</button>
      {faceMode === "environment" ? QRWithRearCam() : null}
    </div>
  );
}
