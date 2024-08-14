const product = require('./product');

exports.formatData = (id, price) => {
    const fid = `${id}`.trim();
    const fprice = (Math.round(price * 100) / 100).toFixed(2);
    const qrCodeText = `Product ID: ${fid}, Price: $${fprice}`;
    return qrCodeText;
};