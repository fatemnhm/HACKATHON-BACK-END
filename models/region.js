const mongoose = require('mongoose');

const regionSchema = new mongoose.Schema(  
    {
        region_id: {
        type: Number,
        unique: true,
        required: true,
        },
        country_code: {
        type: String,
        required: true,
        },
        country: {
        type: String,
        required: true,
        required: true,
        },
        region: {
        type: String,
        required: true,
        },
        sub_region: {
        type: String,
        required: true,
        },
        salesperson: {
        type: String,
        required: true,
        },

    },
);

module.exports = mongoose.model('Region', regionSchema);