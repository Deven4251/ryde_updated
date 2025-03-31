const mongoose = require("mongoose");
const ordermodel = mongoose.model(
  "orders",
  new mongoose.Schema({
    customerName: { type: String, required: true },
    contactNumber: { type: String, required: true },
    address: { type: String, required: true },
    payment_type: { type: String, required: true },
    qty: { type: String, required: true },
    pick_date: { type: String, required: true },
    ret_date: { type: String, required: true },
    pick_time: { type: String, required: true },
    ret_time: { type: String, required: true },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },
  })
);
module.exports = ordermodel;
