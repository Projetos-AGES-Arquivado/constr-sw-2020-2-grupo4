"use strict"

const Joi = require('joi');

ClassModel = () => {
    this.schema = {
        classId: Joi.number().integer(),
        description: Joi.string().max(255)
    };
};

module.exports = ClassModel;