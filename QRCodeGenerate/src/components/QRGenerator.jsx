import React, { useState, useRef } from "react";
import QRCode from "react-qr-code";

function QRGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [downloadWidth, setDownloadWidth] = useState(200);
  const [downloadHeight, setDownloadHeight] = useState(200);
  const qrRef = useRef(null);

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  function downloadQRCode() {
    const svg = qrRef.current.querySelector("svg");
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.width = downloadWidth;
    canvas.height = downloadHeight;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.clearRect(0, 0, downloadWidth, downloadHeight);
      ctx.drawImage(img, 0, 0, downloadWidth, downloadHeight);
      URL.revokeObjectURL(url);

      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qr-code.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };

    img.src = url;
  }

  // Helper to keep input values valid between 100 and 400
  const sanitizeDimension = (value) => {
    let num = Number(value);
    if (isNaN(num) || num < 100) return 100;
    if (num > 400) return 400;
    return num;
  };

  return (
    <div
      className="qr-generator-container"
      data-theme={darkMode ? "dark" : "light"}
    >
      <h1>QR Code Generator</h1>

      {/* Toggle switch */}
      <label className="toggle-switch" title={darkMode ? "Dark Mode" : "Light Mode"}>
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
        <div className="download-size-inputs">
          <label>
            Width (100-400 px):
            <input
              type="number"
              min="100"
              max="400"
              value={downloadWidth}
              onChange={(e) =>
                setDownloadWidth(sanitizeDimension(e.target.value))
              }
            />
          </label>
          <label>
            Height (100-400 px):
            <input
              type="number"
              min="100"
              max="400"
              value={downloadHeight}
              onChange={(e) =>
                setDownloadHeight(sanitizeDimension(e.target.value))
              }
            />
          </label>
        </div>
      )}

      {/* QR Code fixed size 200 */}
      {qrCode && (
        <div
          className="qr-code-wrapper"
          ref={qrRef}
          style={{ width: 200, height: 200 }}
        >
          <QRCode value={qrCode} size={200} bgColor="#ffffff" />
        </div>
      )}

      {qrCode && (
        <button className="download-btn" onClick={downloadQRCode}>
          Download QR Code
        </button>
      )}
    </div>
  );
}

export default QRGenerator;
