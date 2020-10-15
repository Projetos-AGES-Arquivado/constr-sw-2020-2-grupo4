"use strict";

exports.failureHandler = function (request, resp, error) {
    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
}