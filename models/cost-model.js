// Aviram Avivi 209042316
//Meni Banin 206058612

const mongoose = require('mongoose');

// defining the cost schema with its fields and their types and requirements
const costSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true,
        max: 12,
        min: 1
    },
    day: {
        type: Number,
        required: true,
        max: 31,
        min: 1
    },
    sum: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

// creating a model based on the cost schema
const CostModel = mongoose.model('costs', costSchema);

module.exports = { CostModel };

