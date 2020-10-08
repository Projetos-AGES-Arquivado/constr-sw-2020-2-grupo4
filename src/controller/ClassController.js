"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');

var ClassService = require('../service/ClassService.js');
module.exports = {
   async insertController (data) {

      console.log('data ', data);

      const response = await ClassService.insertService(data);

      return response;
  },
  
  async getClass (id) {

   console.log('id ', id);

   const response = await ClassService.getClassService(id);

   return response;
}
}

