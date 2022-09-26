// versi "react-qr-reader" 1.0.0. component API harus disesuaikan dengan yg baru

import { useState, useRef } from "react";
import QrReader from "react-qr-scanner";
import putQRcode from "./api/putQRcode";
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://dataengconf.com.au/${src}?w=${width}&q=${quality || 75}`
}

const dataEngLogo =
  "/images/dataEngLogos/DataEng.MeetUp600x450.transparent.v1.png";

  
const QRscan = () => {
  const [selected, setSelected] = useState("rear");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  // const qrRef = useRef(null);

  const handleScan = async (scanData) => {
    // qrRef.current.openImageDialog();
    setLoadingScan(true);
    console.log(`loaded data data`, scanData, selected);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData, selected);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
      putQRcode(scanData)
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-20 w-auto"
            src={dataEngLogo}
            alt="Workflow"
          />
      <h2>
        Last Scan:
        {selected}
      </h2>

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"rear"}>Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
    </div>
    </div>
    </div>
  );
};

export default QRscan;
