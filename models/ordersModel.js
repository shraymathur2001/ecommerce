const mongoose = require('mongoose');

const OrderedProductSchema = mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    order:{
        type:Array,
        required:true,
        default:null,
    },
    amount: {
        type:Number,
        required:true,
    }
});

module.exports = mongoose.model('orderedProduct', OrderedProductSchema);