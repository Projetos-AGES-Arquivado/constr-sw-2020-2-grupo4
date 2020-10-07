"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');


function ClassController(){};
ClassController.prototype = (function(){

    return {
		insert: function insert(request, reply) {

		},
    }

})();

module.exports = new ClassController();