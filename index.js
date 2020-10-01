"use strict";

var Hapi = require('@hapi/hapi');
var constants = require('./src/config/constants.js');
var routes = require('./src/route/ClassRoutes')();
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Pack = require('./package');
const HapiSwagger = require('hapi-swagger');
//var _ = require('underscore');

var options = {
	state: {
		cookies: {
			strictHeader: false
		}
	}
};

//console.log('constantes index: ', constants);

var host = constants.application['host'];
var port = constants.application['port'];

const server = new Hapi.Server({ host: host, port: port });

server.ext('onRequest', (request, next) => {
	request.plugins.createControllerParams = function (requestParams) {
		var params = _.clone(requestParams);
		params.userId = request.auth.credentials.userId;
		return params;
	};
	return next.continue;
});

for (var route in routes) {
	server.route(routes[route]);
}

module.exports = server;

const swaggerOptions = {
	info: {
		title: 'Aulas Documentation',
		version: Pack.version,
	},
};

if (process.env.NODE_ENV !== 'test') {
	server.register([Inert, Vision, {
		plugin: HapiSwagger,
		options: swaggerOptions
	}
	]).then(() => server.start())
	console.log('Server running in port #' + port);
}