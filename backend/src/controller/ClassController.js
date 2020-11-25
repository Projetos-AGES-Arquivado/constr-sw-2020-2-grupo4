"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');

var ClassService = require('../service/ClassService.js');
var ClassServiceFake = require('../service/ClassServiceFake.js');
var RoomService = require('../service/RoomService');
var ContentService = require('../service/ContentService');
var EvaluationService = require('../service/EvaluationService');
var TeamService = require('../service/TeamService');

exports.getClassWithIdController = async function (request, resp) {
    try {
        let classModel = await ClassService.getClassWithIdService(request.params.id);
        if(request.query.expanded !== undefined && classModel) {
            const validOperations = [
                {'service': 'content', 'op': ContentService.externalGetContentById},
                {'service': 'team', 'op': TeamService.externalGetTeamsbyId},
                {'service': 'room', 'op': RoomService.externalGetRoomById},
                {'service': 'evaluation', 'op': EvaluationService.externalGetEvaluationWithId}
            ];
            if(!Array.isArray(request.query.expanded)){
                const index = validOperations.findIndex(e => e.service === request.query.expanded);
                if(index >= 0){
                   classModel[request.query.expanded] = await validOperations[index].op(classModel[request.query.expanded]);
                }
            }
            else{
                for(const elem of request.query.expanded){
                    const index = validOperations.findIndex(j => j.service === elem)
                    if(index >= 0){
                        const opResult = await validOperations[index].op(classModel[elem]);
                        if(!opResult || opResult.errno || opResult.error || opResult.getStatus !== undefined)
                            return resp.response({success: false, message: "Error expanding request"}).code(400);
                        classModel[validOperations[index].service] = opResult;
                    }
                }
            }
        }
        let response;
        if(classModel){
            (classModel)
            response = {
                success: true,
                message: "Class retrieved successfully",
                data: classModel
            }
            return resp.response(response);
        }
        else{
            response = {
                success: false,
                message: "Class not found"
            }
            return resp.response(response).code(404);
        }
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.insertController = async function (request, resp) {
    try {
        let response = await ClassService.insertService(request.payload);
        let data;
        if(!response) {
            data = {
                success: false,
                message: "Could not create class."
            }
            return resp.response(data).code(400);
        }
        if(response){
            data = {
                success: true,
                message: "Class created successfully!",
                data: response
            }
            return resp.response(data).code(201);
        }
    } catch (error) {
        (error)
        return resp.response(error).code(500);
    }
}

exports.getTeamsByClassId = async function (request, resp) {
    try {
        let id = request.params.id
        let contents = await ClassService.getTeamsByClassId(id);
        var response = {
            success: true,
            message: `All teams from class ${id} retrieved successfully`,
            data: contents
        }
        ('contents ', contents);

        return resp.response(response);
    } catch (error) {

        ('errors ', error);

        return resp.response(error).code(500);
    }
}

exports.getRoomsByClassId = async function (request, resp) {
    try {
        const id = request.params.id;
        const contents = await ClassServiceFake.getRoomByClassId(id);

        var response = {
            success: true,
            message: `All rooms from class ${id} retrieved successfully`,
            data: contents
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getAllRooms = async function (request, resp) {
    try {
        const id = request.params.id;
        const contents = await ClassService.getAllRooms();

        var response = {
            success: true,
            message: `All rooms from Rooms Microservice were retrieved successfully`,
            data: contents
        }
        return resp.response(response);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getAllEvaluations = async function (request, resp) {
    try {
        const contents = await ClassService.getAllEvaluations();

        var response = {
            success: true,
            message: `All evaluations from evalutaion Microservice were retrieved successfully`,
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
        const contents = await ClassService.getEvaluationWithId(id);
        var response = {
            success: true,
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
        const contents = await ClassService.getContentsByClassId(request.params.id);
        if(!contents){
            return resp.response({
                success: false,
                message: `No contents found with for class with id ${id}`,
            }).code(404);
        }
        return resp.response({
            success: true,
            message: `All contents from class ${id} retreived`,
            data: contents
        }).code(200);
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.getAllClassesController = async function (request, resp) {
    try {
        let classes = await ClassService.getAllClassesService(request.query);
        var response = {
            success: true,
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
        let classModel = await ClassService.deleteAllClassesService(request.query);
        let data = {
            success: true,
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
        let data;
        if(classModel){
            data = {
                success: true,
                message: "Class deleted successfully",
                data: classModel
            }
            return resp.response(data);
        }else{
            data = {
                success: false,
                message: "Class not found"
            }
            return resp.response(data).code(404);
        }
    } catch (error) {
        return resp.response(error).code(500);
    }
}

exports.updateClassWithIdController = async function (request, resp) {
    try {
        let classModel = await ClassService.updateClassWithIdService(request.params.id, request.payload);
        let data = {
            success: true,
            message: "Class updated successfully",
            data: classModel
        }
        return resp.response(data);
    } catch (error) {
        return resp.response(error).code(500);
    }
}