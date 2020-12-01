"use strict";

var Hapi = require('@hapi/hapi');
var constants = require('./src/config/constants.js');
var routes = require('./src/route/ClassRoutes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiBasicAuth = require('@hapi/basic');
const Pack = require('./package');
const HapiSwagger = require('hapi-swagger');
const Bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { database } = require('./src/config/constants.js');

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


const { host, port } = constants.application;
const { host : databaseHost, database: databaseName } = constants.database;

const server = new Hapi.Server({ host: host, port: port, routes: { cors: true } });
server.realm.modifiers.route.prefix = '/api/v1'

console.log('MONGO: ', `mongodb://${databaseHost}${databaseName}`);

mongoose.connect(`mongodb://admin:admin@db:${databaseName}`, { useNewUrlParser: true, useUnifiedTopology: true });

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
	basePath: '/api/v1',
    grouping: "tags",
	pathPrefixSize: 2,
	info: {
		title: 'Aulas Documentation',
		version: Pack.version,
	},
	tags: [
		{
			name: "Class",
			description: "All Class related endpoints"
		},
		{
			name: "Health",
			description: "API health check"
		},
		{
			name: "Evaluations",
			description: "Class evaluation"
		},
		{
			name: "Contents",
			description: "Class contents"
		},
		{
			name: "Rooms",
			description: "Class rooms"
		},
		{
			name: "Teams",
			description: "Class teams"
		}
	]
};

if (process.env.NODE_ENV !== 'test') {
	server.register(
		[
			Inert,
			Vision,
			HapiBasicAuth,
			{
				plugin: HapiSwagger,
				options: swaggerOptions,
				routes: {
					prefix: '/api/v1' 
				}
			}
		]
		).then(() => {
			server.auth.strategy('simple', 'basic', { validate });

			server.route(routes);
			
			server.start();
		});
	console.log('Server running in port #' + port);
}