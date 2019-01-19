import { BrowserQRCodeReader } from '@zxing/library';

const codeReader = new BrowserQRCodeReader();

window.code = null;

const scan = async () => {
  // const result = await codeReader.decodeFromInputVideoDevice(undefined, 'qr');
  // window.code = parseInt(result.text, 10);
  // document.querySelector('[type="button"]').click();
  // codeReader.reset();
};

window.scan = scan;

export default scan;
