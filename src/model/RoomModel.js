"use strict"

const Joi = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RoomModel = new Schema({
    someField: Joi.string()
});

module.exports = RoomModel;