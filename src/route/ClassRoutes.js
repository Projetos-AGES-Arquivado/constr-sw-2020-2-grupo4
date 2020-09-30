"use strict"

var ClassController = require('../controller/ClassController');
/** TODO: Create validation scheme for model. */
//var classValidate = require('src/validate/class');

module.exports = () => {
    return [
        {
            method: 'GET',
            path: '/class',
            config: {
                handler: ClassController.findAll,
            }
        },
        {
            method: 'GET',
            path: '/class/{classId}',
            config: {
                handler: ClassController.findBydId
            }
        },
        {
            method: 'POST',
            path: '/class',
            config: {
                handler: ClassController.createClass
            }
        }
    ];
};