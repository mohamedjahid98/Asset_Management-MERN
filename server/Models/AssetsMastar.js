const mongoose = require('mongoose');

const AssestmasSchema = new mongoose.Schema({
    serial_no: Number,
    asset_type: String,
    make: String,
    model: String,
    purchase_date: Date,
    purchase_cost: Number
});



const Assestmas = mongoose.model('Assestmas', AssestmasSchema);

module.exports = Assestmas;
