const { model, Schema } = require('mongoose');

//////////////////////////
// Product Schema
//////////////////////////

const productSchema = new Schema({
    name: { 
        type: String,
        // should EVERYTHING be required? Or just some things?
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: { 
        type: String, 
        requred: true,
    },
    price: { 
        type: Number, 
        required: true, 
        // second param is error message
        min: [0, 'price cannot be negative'],
    },
    quantity: { 
        type: Number, 
        required: true,
        min: [0, 'quantity cannot be negative']
    },
})

module.exports = Product = model('product', productSchema);