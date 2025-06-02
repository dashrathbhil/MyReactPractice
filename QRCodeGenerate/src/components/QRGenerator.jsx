import React, { useState } from "react";
import QRCode from "react-qr-code";

function QRGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <div className='qr-generator-container' data-theme={darkMode ? "dark" : "light"}>
      <h1>QR Code Generator</h1>

      {/* Toggle switch */}
      <label className="toggle-switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>

      <div className="input-group">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Enter text or URL"
        />
        <button disabled={!input.trim()} onClick={handleGenerateQrCode}>
          Generate
        </button>
      </div>

      {qrCode && (
        <div className="qr-code-wrapper">
          <QRCode value={qrCode} size={200} bgColor="#ffffff" />
        </div>
      )}
    </div>
  );
}

export default QRGenerator;
