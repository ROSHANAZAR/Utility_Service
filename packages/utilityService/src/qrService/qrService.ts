import QRCode from 'qrcode';


export class QrService {
  /**
   * ✅ ENCODE: Generate a QR code image from a URL or any string
   * @param url The text or URL you want to encode
   * @param filePath Path to save the generated QR image (e.g., './qrs/my-qr.png')
   */
  async encodeQrCode(url: string, filePath: string): Promise<void> {
    try {
      /**
       * QRCode.toFile will generate a QR image from the provided string
       * and save it to the given file path.
       */
      await QRCode.toFile(filePath, url, {
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
      console.log(`✅ QR Code generated and saved to: ${filePath}`);
    } catch (error) {
      console.error('❌ Failed to generate QR Code:', error);
      throw error;
    }
  }

}
export const qrService = new QrService();