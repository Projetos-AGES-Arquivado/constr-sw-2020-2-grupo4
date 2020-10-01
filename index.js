"use strict";

var Hapi = require('@hapi/hapi');
var constants = require('./src/config/constants.js');
var routes = require('./src/route/ClassRoutes')();
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiBasicAuth = require('@hapi/basic');
const Pack = require('./package');
const HapiSwagger = require('hapi-swagger');
const Bcrypt = require('bcrypt');
//var _ = require('underscore');
//console.log('constantes index: ', constants);

const users = {
	admin: {
		username: 'admin',
		password: '$2b$10$Aru7h3cOy9vLVqLNVdMzYeZsQvC7uSeWOB/ZDtWyyOCIbpHNXefQe',
		name: 'admin',
		id: '2133d32a'
	}
};

const validate = async (request, username, password) => {

	const user = users[username];
	if (!user) {
		return { credentials: null, isValid: false };
	}

	const isValid = await Bcrypt.compare(password, user.password);
	const credentials = { id: user.id, name: user.name };

	return { isValid, credentials };
};

var options = {
	state: {
		cookies: {
			strictHeader: false
		}
	}
};

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

module.exports = server;

const swaggerOptions = {
	info: {
		title: 'Aulas Documentation',
		version: Pack.version,
	},
};

if (process.env.NODE_ENV !== 'test') {
	server.register(
		[
			Inert,
			Vision,
			HapiBasicAuth,
			{
				plugin: HapiSwagger,
				options: swaggerOptions
			}
		]
		).then(() => {
			server.auth.strategy('simple', 'basic', { validate });

			for (var route in routes) {
				server.route(routes[route]);
			}
			
			server.start()
		});
	console.log('Server running in port #' + port);
}