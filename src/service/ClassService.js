var ClassModel = require('../model/ClassModel');
var HttpRequests = require('../external/HttpRequests');
const RoomService = require('../service/RoomService');
const EvaluationService = require('../service/EvaluationService');

const insertService = async (data) => {
    //insert into

    const classModel = new ClassModel(data);
    try {
        console.log('insert from data from service ', data);
        result = await classModel.save();
        console.log('salvo no banco ', result);
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const getClassWithIdService = async (id) => {
    //get class with id
    try {
        result = await ClassModel.findById(id);
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const getAllClassesService = async (queryParams) => {
    //get all classes
    try {
        result = await ClassModel.find(queryParams);
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const deleteClassWithIdService = async (id) => {
    //delete class
    try {
        result = await ClassModel.findByIdAndDelete(id);
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const deleteAllClassesService = async (queryParams) => {
    //delete all class
    try {
        result = await ClassModel.deleteMany(queryParams);
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const updateClassWithIdService = async (id, payload) => {
    //update class
    try {
        result = await ClassModel.findByIdAndUpdate(id, payload);
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const getAllRooms = async () => {
    return await RoomService.externalGetAllRooms();
}

const getAllEvaluations = async() => {
    return await EvaluationService.externalGetAllEvaluations();
}

const getEvaluationWithId = async(id) => {
    return await EvaluationService.externalGetEvaluationWithId(id);
}

const deleteEvaluationWithId = async(id) => {
    return await EvaluationService.externalDeleteEvaluationWithId(id);
}

const postEvaluationWithId = async(payload, id) =>{
    return await EvaluationService.postEvaluationWithId(payload, id);
}

exports.insertService = insertService;
exports.getClassWithIdService = getClassWithIdService;
exports.getAllClassesService = getAllClassesService;
exports.deleteClassWithIdService = deleteClassWithIdService;
exports.updateClassWithIdService = updateClassWithIdService;
exports.deleteAllClassesService = deleteAllClassesService;
exports.getAllRooms = getAllRooms;
exports.getAllEvaluations = getAllEvaluations;
exports.getEvaluationWithId = getEvaluationWithId;
exports.deleteEvaluationWithId = deleteEvaluationWithId;
exports.postEvaluationWithId = postEvaluationWithId;
