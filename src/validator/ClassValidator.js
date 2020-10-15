'use strict'
const joi = require('joi');

exports.idParameterValidator = joi.object({
    id: joi.string().required()
})

