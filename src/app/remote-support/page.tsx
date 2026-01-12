"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import SignatureCanvas from "react-signature-canvas";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default function RemoteSupportPage() {
  const [link, setLink] = useState("https://download.anydesk.com/AnyDesk.exe");
  const [id, setId] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const sigCanvas = useRef<SignatureCanvas>(null);

  useEffect(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    if (/Mac/i.test(ua)) setLink("https://download.anydesk.com/anydesk.dmg");
    else if (/Linux/i.test(ua)) setLink("https://download.anydesk.com/anydesk.tar.gz");
  }, []);

  const clearSignature = () => sigCanvas.current?.clear();

  const generatePdf = async (signature: string, timestamp: string, ip: string) => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    page.drawText("Remote Support Agreement", { x: 50, y: 370, size: 20, font, color: rgb(0, 0, 0) });
    page.drawText(`AnyDesk ID: ${id}`, { x: 50, y: 340, size: 14, font });
    page.drawText(`Date/Time: ${timestamp}`, { x: 50, y: 320, size: 14, font });
    page.drawText(`IP Address: ${ip}`, { x: 50, y: 300, size: 14, font });
    page.drawText(`Agreed to Terms: ${agreed ? "Yes" : "No"}`, { x: 50, y: 280, size: 14, font });

    const sigImage = await pdfDoc.embedPng(signature);
    page.drawImage(sigImage, { x: 50, y: 100, width: 200, height: 100 });

    const pdfBytes = await pdfDoc.save();

    // Convert to standard Uint8Array backed by ArrayBuffer
    const properArray = new Uint8Array(pdfBytes.length);
    properArray.set(pdfBytes);

    // Create blob safely
    const blob = new Blob([properArray.buffer], { type: "application/pdf" });
    return URL.createObjectURL(blob);
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateId = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "");
    return cleaned.length >= 5 && cleaned.length <= 20;
  };

  const sendSupportRequest = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (!agreed) {
      setErrorMessage("You must agree to the remote support terms before sending.");
      return;
    }

    if (!sigCanvas.current || sigCanvas.current.isEmpty()) {
      setErrorMessage("Please sign the agreement before submitting.");
      return;
    }

    if (!validateId(id)) {
      setErrorMessage("Please enter a valid AnyDesk ID (numbers only).");
      return;
    }

    setLoading(true);

    try {
      const signatureData = sigCanvas.current.toDataURL("image/png");
      const timestamp = new Date().toISOString();
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ip = ipRes.ok ? (await ipRes.json()).ip : "unknown";

      // Generate PDF URL
      const pdfUrl = await generatePdf(signatureData, timestamp, ip);

      // Send to internal API which will forward to SendGrid or Web3Forms server-side
      const apiRes = await fetch("/api/send-anydesk-id", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          osLink: link,
          signature: signatureData,
          agreed,
          timestamp,
          ip,
        }),
      });

      const apiData = await apiRes.json();
      console.log("send-anydesk-id response:", apiData);

      if (apiRes.ok && apiData.ok) {
        setSuccessMessage("Support request sent — a technician will connect shortly.");
        // Open the agreement PDF for user records
        window.open(pdfUrl, "_blank");
      } else {
        console.error("Failed to send support request:", apiData);
        setErrorMessage("Failed to send support request. Please try again or contact us directly.");
      }
    } catch (err) {
      console.error("Error sending request:", err);
      setErrorMessage("Failed to send. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Remote Support — Quick & Secure</h2>
              <p className="text-gray-600 mb-4">
                Download AnyDesk for your platform, open it, then share your AnyDesk ID below. Sign the agreement and we&apos;ll connect securely.
              </p>

              <a
                href={link}
                className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition mb-4"
              >
                ⬇️ Download AnyDesk
              </a>

              <div className="text-sm text-gray-500 mb-4">
                Download will auto-detect your OS. If the download doesn&apos;t start, visit the official AnyDesk download page.
              </div>

              <label className="block text-sm font-medium text-gray-700 mb-2">Your AnyDesk ID</label>
              <input
                type="text"
                placeholder="Enter your AnyDesk ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg mb-4"
              />

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sign to authorize remote access</label>
                <div className="border rounded-lg p-2 bg-gray-50">
                  <SignatureCanvas
                    ref={sigCanvas}
                    penColor="black"
                    canvasProps={{ width: 400, height: 150, className: "w-full h-36" }}
                  />
                  <div className="mt-2 flex gap-2">
                    <button onClick={clearSignature} className="text-sm text-red-600 underline">Clear Signature</button>
                    <button onClick={() => { sigCanvas.current?.fromDataURL(''); clearSignature(); }} className="text-sm text-gray-600 underline">Reset</button>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4 max-h-56 overflow-y-auto text-left text-sm bg-gray-50 mb-4">
                <h3 className="text-sm font-semibold mb-2">Remote Support Disclaimer & Agreement</h3>
                <p className="text-gray-700 text-sm">
                  By sharing your AnyDesk ID and signing, you authorize our technician to access your device for support. You may end the session anytime.
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                  <li>We will not access personal files unrelated to the support task.</li>
                  <li>Keep backups before allowing changes that could affect data.</li>
                  <li>Our liability is limited to the value of the services provided.</li>
                </ul>
              </div>

              <label className="flex items-center gap-2 mb-4">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="w-4 h-4"
                />
                <span className="text-sm">I have read and agree to the Remote Support terms.</span>
              </label>

              {errorMessage && <div className="text-red-600 mb-3">{errorMessage}</div>}
              {successMessage && <div className="text-green-700 mb-3">{successMessage}</div>}

              <button
                onClick={sendSupportRequest}
                disabled={!id || !agreed || loading}
                className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                ) : null}
                {loading ? "Sending..." : "Send My AnyDesk ID"}
              </button>

              <p className="text-gray-500 text-sm mt-4">
                Need immediate help? Call us: <a href="tel:+263715874747" className="text-blue-700 underline">+263 715 874 747</a>
              </p>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold mb-2">How it works</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Download and run AnyDesk using the button.</li>
                  <li>Copy your AnyDesk ID and paste it into the form.</li>
                  <li>Sign the agreement and submit. We&apos;ll contact you to begin the session.</li>
                </ol>
                <div className="mt-4 text-sm">We respect your privacy and only access systems you authorize.</div>
              </div>

              <div className="mt-6 bg-white rounded-lg border p-4 shadow-sm">
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <div className="flex flex-col gap-3">
                  <Link href="/" className="text-blue-600 underline">Return to Home</Link>
                  <a href="https://fast.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">Check Internet Speed</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}