import {qrService} from "@packages/utilityservice"

qrService.encodeQrCode("https://www.google.com", "example-qr.png")
  .then(() => console.log("QR Code generated successfully"))
  .catch((error) => console.error("Error generating QR Code:", error));
