const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
  addressId: { type: String, required: true },
  paymentMode: { type: String, enum: ['cash', 'card', 'upi'], required: true },
  invoiceId: { type: String, required: true },
  status: { type: String, default: 'placed' }, // Add other possible statuses like 'shipped', 'delivered', etc.
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
