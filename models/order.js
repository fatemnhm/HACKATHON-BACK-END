const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    order_id: {
      type: String,
      unique: true,
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
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', 
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
    }
  },
);

module.exports = mongoose.model('Order', orderSchema);
