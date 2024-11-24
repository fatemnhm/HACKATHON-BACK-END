const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    sub_category: {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_cost_to_consumer: {
      type: Number,
      required: true,
    },
  },
);

module.exports = mongoose.model('Product', productSchema);
