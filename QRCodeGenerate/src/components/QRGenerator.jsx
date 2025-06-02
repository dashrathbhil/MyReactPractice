import React, { useState } from "react";
import QRCode from "react-qr-code";
function QRGenerator  () {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }


  return (
    <>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        name="qr-code"
        value={input}
        placeholder="Enter Something"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={handleGenerateQrCode}
      >
        Generate
      </button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#ffff" />
      </div>
    </>
  );
}

export default QRGenerator;
