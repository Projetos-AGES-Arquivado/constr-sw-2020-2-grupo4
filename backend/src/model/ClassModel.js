"use strict"

const mongoose = require('mongoose');

const ClassModel = mongoose.model('class', {
    description: {
        type: String,
        required: false
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    room: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    team: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    evaluation: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = ClassModel;