"use strict"

const mongoose = require('mongoose');

const ClassModel = mongoose.model('class', {
    description: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    room: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    team: {
        type: String,
        required: false
    },
    evaluation: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = ClassModel;