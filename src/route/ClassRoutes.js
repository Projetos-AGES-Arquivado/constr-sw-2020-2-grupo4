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
        path: "/class/{id}",
        options: {
            auth: "simple",
            description: "Returns a class with given ID",
            notes: "Returns class information with given ID",
            tags: ["api"],
            handler: async (request, resp) => {
                try {
                    const classModel = await ClassController.getClass(request.params.id);
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
        method:"DELETE",
        path:"/class/{id}",
        handler: async (request, res) => {
            try{
                const classModel = await ClassController.deleteClassWithId(request.params.id);
                let data = {
                    status: "success",
                    message: "Class deleted successfully",
                    data: classModel
                }
                return res.response(data);
            } catch(error) {
               return resp.response(error).code(500);
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
                    let classes = await ClassController.getAllClasses();
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
            tags: ["api"],
            handler: async (request, resp) => {
                try {
                    console.log('request ', request.payload)
                    const response = await ClassController.insertController(request.payload);
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
