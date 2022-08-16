const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  prodName: String,
  prodPrice: Number,
  prodStock: Number,
  prodImage: String 
});

module.exports = model('Product', productSchema);

