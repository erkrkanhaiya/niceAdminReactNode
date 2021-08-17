const mongoose = require('mongoose');

const RestaurentSchema = new mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    res_fullname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    res_address: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    res_mobile: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },

    res_email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },



    owner_fullname: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    owner_mobile: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    owner_address: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    owner_email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },


    password: {
        type: String,
        // required: true,
        min: 6,
        max: 1024,
        select: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        default: 'member',
        enum: ['admin', 'staff', 'member']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Restaurent', RestaurentSchema);
