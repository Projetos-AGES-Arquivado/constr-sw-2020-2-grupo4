"use strict"

var ClassController = require('../controller/ClassController');
/** TODO: Create validation scheme for model. */
//var classValidate = require('src/validate/class');

module.exports = () => {
    return [
        {
            method: 'GET',
            path: '/index',
            options: {
                description: 'Index endpoint to test if application is up and running',
                notes: 'Returns a hello world',
                tags: ['api'],
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
            method: 'GET',
            path: '/class/{classId}',
            config: {
                handler: () => { }
            }
        },
        {
            method: 'POST',
            path: '/class',
            config: {
                handler: () => { }
            }
        }
    ];
};