"use strict"

var ClassController = require("../controller/ClassController");
/** TODO: Create validation scheme for model. */
//var classValidate = require("src/validate/class");

module.exports = () => {
    return [
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
        }
    ];
};