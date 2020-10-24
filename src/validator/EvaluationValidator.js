'use strict'
const joi = require('joi');

exports.postEvaluationSchema = joi.object({
    nome: joi.string().optional(),
    peso: joi.string().optional(),
    grau: joi.string().optional(),
    team: joi.string().optional(),
    descricao: joi.string().optional(),
    questoes: joi.array().items(
        joi.object({
            enunciado: joi.string().optional(),
            resposta: joi.string().optional(),
        }))
})
