"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');

var ClassService = require('../service/ClassService.js');
var ClassServiceFake = require('../service/ClassServiceFake.js');

exports.getClassWithIdController = async function (request, resp) {
    try {
        let classModel = await ClassService.getClassWithIdService(request.params.id);
        var response = {
            success: "true",
            message: "Class retrieved successfully",
            data: classModel
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.insertController = async function (request, resp) {
    try {
        let response = await ClassService.insertService(request.payload);
        var data = {
            success: "true",
            message: "Class created successfully",
            data: response
        }
        return resp.response(data);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getTeamsByClassId = async function (request, resp) {
    try {
        let id = request.params.id
        let contents = await ClassServiceFake.getTeamsByClassId(request.params.id);
        var response = {
            success: "true",
            message: `All teams from class ${id} retrieved successfully`,
            data: contents
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getRoomsByClassId = async function (request, resp) {
    try {
        const id = request.params.id;
        const contents = await ClassServiceFake.getRoomByClassId(id);
        var response = {
            success: "true",
            message: `All rooms from class ${id} retrieved successfully`,
            data: contents
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getEvaluationsByClassId = async function (request, resp) {
    try {
        const id = request.params.id;
        const contents = await ClassServiceFake.getEvaluationsByClassId(id);
        var response = {
            success: "true",
            message: `All evaluations from class ${id} retrieved successfully`,
            data: contents
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getContentsByClassId = async function (request, resp) {
    try {
        const id = request.params.id;
        const contents = await ClassServiceFake.getContentsByClassId(id);
        var response = {
            success: "true",
            message: `All contents from class ${id} retrieved successfully`,
            data: contents
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getAllClassesController = async function (request, resp) {
    try {
        let classes = await ClassService.getAllClassesService();
        var response = {
            success: "true",
            message: "All classes retrieved successfully",
            data: classes
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.deleteAllClassesController = async function (request, resp) {
    try {
        let classModel = await ClassService.deleteAllClassesService();
        let data = {
            status: "success",
            message: "All classes were deleted",
            data: classModel
        }
        return resp.response(data);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.deleteClassWithIdController = async function (request, resp) {
    try {
        let classModel = await ClassService.deleteClassWithIdService(request.params.id);
        let data = {
            status: "success",
            message: "Class deleted successfully",
            data: classModel
        }
        return resp.response(data);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.updateClassWithIdController = async function (request, resp) {
    try {
        let classModel = await ClassService.updateClassWithIdService(request.params.id, request.payload);
        let data = {
            status: "success",
            message: "Class updated successfully",
            data: classModel
        }
        return resp.response(data);
    } catch (error) {
        return resp.response(error).code(500);
    }
}