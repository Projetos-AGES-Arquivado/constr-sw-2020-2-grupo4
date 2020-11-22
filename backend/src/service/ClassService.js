var ClassModel = require('../model/ClassModel');
var HttpRequests = require('../external/HttpRequests');
const TeamService = require('../service/TeamService');
const RoomService = require('../service/RoomService');
const ContentService = require('../service/ContentService');
const EvaluationService = require('../service/EvaluationService');


const insertService = async (data) => {
    const responseFromRoomService = RoomService.externalGetRoomById(data.room)
    const responseFromContentService = ContentService.externalGetContentById(data.content)
    const responseFromEvaluationService = EvaluationService.externalGetEvaluationWithId(data.evaluation)
    const responseFromTeamService = TeamService.externalGetTeamsbyId(data.team)
    
    return Promise.all([responseFromRoomService, responseFromContentService, responseFromEvaluationService, responseFromTeamService])
        .then(async (values) => {
            if(values.some(e => (e.errno || e.error || e.getStatus !== undefined || (Array.isArray(e) && e.length === 0)))){
                return false;
            }
            else{
                const classModel = new ClassModel(data);
                try {
                    result = await classModel.save();
                } catch (error) {
                    console.log('error ', error);
                }
                return result
            }
        })
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
    const curClass = await getClassWithIdService(id);
    return await TeamService.externalGetTeamsbyId(curClass.team);
}

const getAllRooms = async () => {
    return await RoomService.externalGetAllRooms();
}

const getContentsByClassId = async (id) => {
    try{
        const c = await getClassWithIdService(id);
        return await ContentService.externalGetContentById(c.content);
    }catch (e){
        return false;
    }
}

const getAllEvaluations = async() => {
    return await EvaluationService.externalGetAllEvaluations();
}

const getEvaluationWithId = async(id) => {
    return await EvaluationService.externalGetEvaluationWithId(id);
}

exports.insertService = insertService;
exports.getClassWithIdService = getClassWithIdService;
exports.getAllClassesService = getAllClassesService;
exports.deleteClassWithIdService = deleteClassWithIdService;
exports.updateClassWithIdService = updateClassWithIdService;
exports.deleteAllClassesService = deleteAllClassesService;
exports.getContentsByClassId = getContentsByClassId;
exports.getAllRooms = getAllRooms;
exports.getAllEvaluations = getAllEvaluations;
exports.getEvaluationWithId = getEvaluationWithId;
exports.getTeamsByClassId = getTeamsByClassId;