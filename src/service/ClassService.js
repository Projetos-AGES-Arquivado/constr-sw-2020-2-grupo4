var ClassModel = require('../model/ClassModel');
var HttpRequests = require('../external/HttpRequests');

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

const getContentsByClassId = async (id) => {

    console.log('get contents by class id');

    HttpRequests.sendRequest(
        null,
        {
            host: 'ec2-34-238-114-89.compute-1.amazonaws.com',
            path: '/turma',
            port: '3000',
            method: 'GET'
        },
        (response, error) => {
            if (error) {
                //reject(error);
            } else {
                console.log(response)
                //resolve(response.toString('utf-8'));
            }
        }
    );

    console.log('get contents by class id after');

    //insert into
    //const contents = await ContentFaker.getAllContentsByClassId(id);
    return 'contents';
}

exports.insertService = insertService;
exports.getClassWithIdService = getClassWithIdService;
exports.getAllClassesService = getAllClassesService;
exports.deleteClassWithIdService = deleteClassWithIdService;
exports.updateClassWithIdService = updateClassWithIdService;
exports.deleteAllClassesService = deleteAllClassesService;
exports.getContentsByClassId = getContentsByClassId;
