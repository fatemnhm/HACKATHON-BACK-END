const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      unique: true,
      required: true,
    },
    order_date: {
      type: Date,
      required: true,
    },
    ship_date: {
      type: Date,
      required: true,
    },
    ship_mode: {
      type: String,
      required: true,
    },
    customer_id: {
      type: String,
      ref: 'Customer', // Foreign key reference
      required: true,
    },
    product_id: {
      type: String,
      ref: 'Product', // Foreign key reference
      required: true,
    },
    sales: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    profit: {
      type: Number,
      required: true,
    },
    postal_code: {
      type: Number,
      required: false,
    },
    region_id: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
