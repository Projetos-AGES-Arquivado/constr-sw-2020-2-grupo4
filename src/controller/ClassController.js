"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');

var ClassService = require('../service/ClassService.js');
module.exports = {
   async insertController(data) {

      console.log('data ', data);

      const response = await ClassService.insertService(data);

      return response;
   },

   async getClassWithIdController(id) {

      console.log('id ', id);

      const response = await ClassService.getClassService(id);

      return response;
   },

   async getAllClassesController() {

      const response = await ClassService.getAllClassesService();

      return response;
   },

   async deleteClassWithIdController(id) {

      const response = await ClassService.deleteClassWithIdService(id);

      return response;
   },

   async deleteAllClassesController() {

      const response = await ClassService.deleteAllClassesService();

      return response;
   },

   async updateClassWithIdController(id, payload) {

      const response = await ClassService.updateClassWithIdService(id, payload);

      return response;
   }
}

