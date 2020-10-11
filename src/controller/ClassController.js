"use strict";

var Hapi = require('@hapi/hapi');
var Q = require('q');

var ClassService = require('../service/ClassService.js');
var ClassServiceFake = require('../service/ClassServiceFake.js');

module.exports = {
   async insertController(data) {

      console.log('data ', data);

      const response = await ClassService.insertService(data);

      return response;
   },

   async getClassWithIdController(id) {
      const response = await ClassService.getClassWithIdService(id);

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
   },

   async getContentsByClassId(id) {
      
      const response = await ClassServiceFake.getContentsByClassId(id);

      return response;

   },

   async getEvaluationsByClassId(id) {
      const response = await ClassServiceFake.getEvaluationsByClassId(id);

      return response;
   },

   async getRoomsByClassId(id) {
      const response = await ClassServiceFake.getRoomByClassId(id);
      
      return response;
   },

   async getTeamsByClassId(id) {
      const response = await ClassServiceFake.getTeamsByClassId(id);

      return response;
   }
}

