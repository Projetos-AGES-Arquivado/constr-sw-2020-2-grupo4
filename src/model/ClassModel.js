"use strict"

const Joi = require('joi');
const mongoose = require('mongoose');
//const RoomModel = require('./RoomModel');
//const { Schema } = mongoose;

const ClassModel = mongoose.model('Class', {
    description: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    room: {
        type: String,
        required: false
    },
    team: {
        type: String,
        required: false
    },
    evaluation: {
        type: String,
        required: false
    }
});

module.exports = ClassModel;