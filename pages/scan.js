import React, { useState } from "react";
import SEO from "../components/seo";
import QRScan from "../components/qrreader";
import { Fragment } from "react";
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

  return (
    <Fragment>
      <SEO
        keywords={[`Data Engineering`, `DataEng`, `DataEngBytes`]}
        title="Scan QR Code - DataEngBytes!"
        description="Reach out if you have a question, DataEngBytes"
      />
      <div>
        {/* {loadCameraPermissions()} */}
        <h1>Hello QR Code Reader</h1>
        <button onClick={() => cameraButtonClick(faceMode)}>{faceMode}</button>
        {faceMode === "user" ? QRWithRearCam() : null}
      </div>
    </Fragment>
  );
}
