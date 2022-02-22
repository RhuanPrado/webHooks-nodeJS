const { Schema, model } = require('mongoose');


const PaymentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    value: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        default: false,
    },
},{
    timestamps:true,
  }
);

module.exports = model('Payment', PaymentSchema);