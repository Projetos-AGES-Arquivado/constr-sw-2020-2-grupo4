const ContentFaker = require('../datafaker/ContentFaker');
const EvaluationFaker = require('../datafaker/EvaluationFaker');
const RoomFaker = require('../datafaker/RoomFaker');
const TeamFaker = require('../datafaker/TeamFaker');

const getContentsByClassId = async (id) => {
    //insert into
    const contents = await ContentFaker.getAllContentsByClassId(id);
    return contents;
}

const getEvaluationsByClassId = async (id) => {
    const evaluations = await EvaluationFaker.getAllEvaluationsByClassId(id);

    return evaluations;
}

const getRoomsByClassId = async (id) => {
    const rooms = await RoomFaker.getRoomByClassId(id);

    return rooms;
}

const getTeamsByClassId = async (id) => {
    const teams = await TeamFaker.getAllTeamsByClassId(id);

    return teams;
}

exports.getContentsByClassId = getContentsByClassId;
exports.getEvaluationsByClassId = getEvaluationsByClassId;
exports.getRoomByClassId = getRoomsByClassId;
exports.getTeamsByClassId = getTeamsByClassId;