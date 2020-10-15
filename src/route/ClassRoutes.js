"use strict"
const joi = require('joi');
const ClassController = require('../controller/ClassController.js');
const HealthController = require('../controller/HealthController.js');

module.exports = [
    {
        method: "GET",
        path: "/",
        options: {
            auth: "simple",
            description: "Index endpoint to test if application is up and running",
            notes: "Returns a hello world",
            tags: ["api", "Health"],
            handler: HealthController.getHealthController
        }
    },
    {
        method: "GET",
        path: "/classes/{id}",
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
            handler: ClassController.getClassWithIdController
        }
    },
    {
        method: "DELETE",
        path: "/classes/{id}",
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
            handler: ClassController.deleteClassWithIdController
        }
    },
    {
        method: "DELETE",
        path: "/classes",
        options: {
            auth: "simple",
            description: "Deletes all classes",
            notes: "Deletes all classes from database",
            tags: ["api", "Class"],
            handler: ClassController.deleteAllClassesController
        }
    },
    {
        method: "PUT",
        path: "/classes/{id}",
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
            handler: ClassController.updateClassWithIdController
        }
    },
    {
        method: "PATCH",
        path: "/classes/{id}",
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
            handler: ClassController.updateClassWithIdController
        }
    },
    {
        method: "GET",
        path: "/classes",
        options: {
            auth: "simple",
            description: "Returns all classes",
            notes: "Returns all registered classes",
            tags: ["api", "Class"],
            handler: ClassController.getAllClassesController
        }
    },
    {
        method: "POST",
        path: "/classes",
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
                    evaluation: joi.string().optional(),
                    date: joi.date().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            handler: ClassController.insertController
        }
    },
    {
        method: "GET",
        path: "/classes/{id}/content",
        options: {
            validate: {
                params: joi.object({
                    id: joi.string().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            auth: "simple",
            description: "Returns all contents from a class",
            notes: "Returns all contents for a class",
            tags: ["api", "Class", "Contents"],
            handler: ClassController.getContentsByClassId
        }
    },
    {
        method: "GET",
        path: "/classes/{id}/evaluations",
        options: {
            validate: {
                params: joi.object({
                    id: joi.string().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            auth: "simple",
            description: "Returns all evaluations from a class",
            notes: "Returns all evaluations for a class",
            tags: ["api", "Class", "Evaluations"],
            handler: ClassController.getEvaluationsByClassId
        }
    },
    {
        method: "GET",
        path: "/classes/{id}/rooms",
        options: {
            validate: {
                params: joi.object({
                    id: joi.string().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            auth: "simple",
            description: "Returns all rooms from a class",
            notes: "Returns all rooms for a class",
            tags: ["api", "Class", "Rooms"],
            handler: ClassController.getRoomsByClassId
        }
    },
    {
        method: "GET",
        path: "/classes/{id}/teams",
        options: {
            validate: {
                params: joi.object({
                    id: joi.string().required()
                }),
                failAction: (request, resp, error) => {
                    return error.isJoi ? resp.response(error.details[0]).takeover() : resp.response(error).takeover();
                }
            },
            auth: "simple",
            description: "Returns all teams from a class",
            notes: "Returns all teams for a class",
            tags: ["api", "Class", "Teams"],
            handler: ClassController.getTeamsByClassId
        }
    },

];
