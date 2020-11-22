"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');

exports.getHealthController = async function (request, resp) {
    try {
        var data = {
            success: "true",
            message: "Hello world"
        }
        return resp.response(data);
    } catch (error) {
        return resp.response(error).code(500);
    }
}