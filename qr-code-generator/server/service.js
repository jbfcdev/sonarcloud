const QRCode = require('qrcode');
const product = require('./product');

exports.formatData = (data) => {
    const qrCodeText = product.formatData(data.id, data.price);
    return qrCodeText;
};

exports.generateQRCode = async (qrCodeText) => {
    const options = {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        margin: 1
    };

    const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
    return qrCodeBuffer;
};