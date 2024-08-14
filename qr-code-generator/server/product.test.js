const product = require('./product')

test('Product info must have code and price formated', () => {
    expect(product.formatData('1122.3344',49.9)).toBe('Product ID: 1122.3344, Price: $49.90');
  });

test('Product info must have code and price formated', () => {
    expect(product.formatData('  1122.3344           ',49.9)).toBe('Product ID: 1122.3344, Price: $49.90');  });