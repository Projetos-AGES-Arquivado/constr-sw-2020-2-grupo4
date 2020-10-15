'use strict'
const joi = require('joi');

exports.idParameterValidator = joi.object({
    id: joi.string().required()
})

exports.classUpdateScheme = joi.object({
    description: joi.string().optional(),
    content: joi.string().optional(),
    room: joi.string().optional(),
    team: joi.string().optional(),
    evaluation: joi.string().optional()
})