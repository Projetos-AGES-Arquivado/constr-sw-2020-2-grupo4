"use strict"
const joi = require('joi');
var ClassController = require('../controller/ClassController.js');

module.exports = [
    {
        method: "GET",
        path: "/index",
        options: {
            auth: "simple",
            description: "Index endpoint to test if application is up and running",
            notes: "Returns a hello world",
            tags: ["api", "Health"],
            handler: async (request, resp) => {
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
        }
    },
    {
        method: "GET",
        path: "/class/{id}",
        options: {
            auth: "simple",
            description: "Returns a class with given ID",
            notes: "Returns class information with given ID",
            tags: ["api", "Class"],
            validate: {
                params: joi.object({ 
                    id: joi.string().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            handler: async (request, resp) => {
                try {
                    let classModel = await ClassController.getClassWithIdController(request.params.id);
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
        }
    },
    {
        method: "DELETE",
        path: "/class/{id}",
        options: {
            auth: "simple",
            description: "Deletes a class with given ID",
            notes: "Deletes a class information with given ID",
            tags: ["api", "Class"],
            validate: {
                params: joi.object({ 
                    id: joi.string().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            handler: async (request, res) => {
                try {
                    let classModel = await ClassController.deleteClassWithIdController(request.params.id);
                    let data = {
                        status: "success",
                        message: "Class deleted successfully",
                        data: classModel
                    }
                    return res.response(data);
                } catch (error) {
                    return resp.response(error).code(500);
                }
            }
        }
    },
    {
        method: "DELETE",
        path: "/class",
        options: {
            auth: "simple",
            description: "Deletes all classes",
            notes: "Deletes all classes from database",
            tags: ["api", "Class"],
            handler: async (request, res) => {
                try {
                    let classModel = await ClassController.deleteAllClassesController();
                    let data = {
                        status: "success",
                        message: "All classes were deleted",
                        data: classModel
                    }
                    return res.response(data);
                } catch (error) {
                    return resp.response(error).code(500);
                }
            }
        }
    },
    {
        method: "PUT",
        path: "/class/{id}",
        options: {
            auth: "simple",
            description: "Updates class info with given ID",
            notes: "Updates class info with given ID",
            tags: ["api", "Class"],
            validate: {
                params: joi.object({ 
                    id: joi.string().required()
                }),
                payload: joi.object({
                    description: joi.string().optional(),
                    content: joi.string().optional(),
                    room: joi.string().optional(),
                    team: joi.string().optional(),
                    evaluation: joi.string().optional()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            handler: async (request, res) => {
                try {
                    let classModel = await ClassController.updateClassWithIdController(request.params.id, request.payload);
                    let data = {
                        status: "success",
                        message: "Class updated successfully",
                        data: classModel
                    }
                    return res.response(data);
                } catch (error) {
                    return resp.response(error).code(500);
                }
            }
        }
    },
    {
        method: "GET",
        path: "/class",
        options: {
            auth: "simple",
            description: "Returns all classes",
            notes: "Returns all registered classes",
            tags: ["api", "Class"],
            handler: async (request, resp) => {
                try {
                    let classes = await ClassController.getAllClassesController();
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
        }
    },
    {
        method: "POST",
        path: "/class",
        options: {
            auth: "simple",
            description: "Register new class",
            notes: "Register a class",
            tags: ["api", "Class"],
            validate: {
                payload: joi.object({
                    description: joi.string().required(),
                    content: joi.string().required(),
                    room: joi.string().optional(),
                    team: joi.string().optional(),
                    evaluation: joi.string().optional()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            handler: async (request, resp) => {
                try {
                    console.log('request ', request.payload)
                    let response = await ClassController.insertController(request.payload);
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
        }
    }
];
