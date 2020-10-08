"use strict"
var ClassController = require('../controller/ClassController.js');

module.exports = [
    {
        method: "GET",
        path: "/index",
        options: {
            auth: "simple",
            description: "Index endpoint to test if application is up and running",
            notes: "Returns a hello world",
            tags: ["api"],
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
        path: "/class/{classId}",
        options: {
            auth: "simple",
            description: "Returns a class with given ID",
            notes: "Returns class information with given ID",
            tags: ["api"],
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
        path: "/class",
        options: {
            auth: "simple",
            description: "Returns all classes",
            notes: "Returns all registered classes",
            tags: ["api"],
            handler: async (request, resp) => {
                try {
                    //let classes = await ClassModel.find().exec();
                    let classes = [
                        {
                            id: 1,
                            name: "Programação distribuida",
                            professor: "Sergio Johann"
                        },
                        {
                            id: 1,
                            name: "Construção de software",
                            professor: "Eduardo Arruda"
                        }
                    ]
                    var data = {
                        success: "true",
                        message: "Classes retrieved successfully",
                        classes: classes
                    }
                    return resp.response(data);
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
            tags: ["api"],
            handler: async (request, resp) => {
                try {
                    console.log('request ', request.payload)
                    const response = await ClassController.insertController(request.payload);
                    var data = {
                        success: "true",
                        message: "Class created successfully",
                        class: response
                    }
                    return resp.response(data);
                } catch (error) {
                    return resp.response(error).code(500);
                }
            }
        }
    }
];
