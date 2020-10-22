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

const getTeamsByClassId = async (id) => {

    console.log('get contents by class id');

    return HttpRequests.sendRequest(
        null,
        {
            host: 'ec2-34-238-114-89.compute-1.amazonaws.com',
            path: '/turma',
            port: '3000',
            method: 'GET'
        },
        (response, error) => {
            if (error) {
                console.log(error)
                //reject(error);
            } else {

                response = JSON.parse(response)
                let teamsList = []
                for (let i = 0; i < response.length; i++) {
                    if (response[i].aulas.includes(id)) {
                        teamsList.push(response[i])
                    }
                }

                //console.log(teamsList)
                //resolve(response.toString('utf-8'));
                return teamsList;
            }
        }
    );
}

exports.insertService = insertService;
exports.getClassWithIdService = getClassWithIdService;
exports.getAllClassesService = getAllClassesService;
exports.deleteClassWithIdService = deleteClassWithIdService;
exports.updateClassWithIdService = updateClassWithIdService;
exports.deleteAllClassesService = deleteAllClassesService;
exports.getTeamsByClassId = getTeamsByClassId;
