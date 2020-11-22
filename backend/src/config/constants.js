"use strict";

var config = require('../config.json');
var dbConfig = require('../dbconfig.json');

module.exports = function() {
	var obj = {
		application : {
			host : config.dev.host,
			port : config.dev.port,
		},
		database : {
			host     : dbConfig.dev.host,
			user     : dbConfig.dev.user,
			password : dbConfig.dev.password,
			database : dbConfig.dev.database
		},
		server : {
			defaultHost : `http://${config.dev.host}:${config.dev.port}/`
		}
	};

	if (!obj.application['host']) {
		throw new Error('Missing constant application.host. ' +
			'Check your enviroment variables NODE_HOST.');
	} else if (!obj.application['port']) {
		throw new Error('Missing constant application.port. ' +
			'Check your enviroment variable NODE_PORT.');
	} else if (!obj.database['host']) {
		throw new Error('Missing constant database.host. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['user']) {
		throw new Error('Missing constant database.user. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['password']) {
		throw new Error('Missing constant database.password. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['database']) {
		throw new Error('Missing constant database.database. ' +
			'Check your enviroment variables.');
	}

	return obj;
}();