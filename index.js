"use strict";

var Hapi = require('@hapi/hapi');
var constants = require('./src/config/constants.js');
var ClassRoutes = require('./src/route/ClassRoutes');
//var _ = require('underscore');

var options = {
	state : {
		cookies : {
			strictHeader : false
		}
	}
};

//console.log('constantes index: ', constants);

var host = constants.application['host'];
var port = constants.application['port'];
const server = new Hapi.Server({ host:host, port: port });

server.ext('onRequest', (request, next) => {
	request.plugins.createControllerParams = function(requestParams){
		var params = _.clone(requestParams);
		params.userId = request.auth.credentials.userId;
		return params;
	};
	return next.continue;
});

// Add all the routes within the routes folder
for (var route in ClassRoutes) {
	server.route(routes[route]);
}

module.exports = server;

if (process.env.NODE_ENV !== 'test') {
	server.start();

	console.log('Server running in port #'+port);
}