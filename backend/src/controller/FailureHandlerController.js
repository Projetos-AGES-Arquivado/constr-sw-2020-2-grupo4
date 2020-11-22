"use strict";

exports.failureHandler = function (request, resp, error) {
    return error.isJoi ? resp.response(error.details[0]).takeover().code(400) : resp.response(error).takeover().code(400);
}