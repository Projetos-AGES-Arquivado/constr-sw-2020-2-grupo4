

const { async } = require('q');
//mongoose
var ClassModel = require('../model/ClassModel');

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

const getClassService = async (id) => {
    //get class with id
    try {
        result = await ClassModel.findById(id).exec();
    } catch (error) {
        console.log('error ', error);
    }
    return result
}

const getAllClassesService = async () => {
    //get all classes
    try {
        result = await ClassModel.find().exec();
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

exports.insertService = insertService;
exports.getClassService = getClassService;
exports.getAllClassesService = getAllClassesService;
exports.deleteClassWithIdService = deleteClassWithIdService;
