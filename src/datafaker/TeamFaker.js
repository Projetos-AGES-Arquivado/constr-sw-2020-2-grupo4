var mongoose = require('mongoose');

    const getAllTeams = async () => {
        return [
            {
                _id: new mongoose.mongo.ObjectId(),
                year: 2020,
                semester: 2,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['5f8251631e35b9c347821094', '5f8251865e89f98fe5f91d4d'],
                professor: 'id_professor'
            },
            {
                _id: new mongoose.mongo.ObjectId(),
                year: 2020,
                semester: 1,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['5f8251865e89f98fe5f91d4d', '5f8251a7f7b6f2bf8f8c299e'],
                professor: 'id_professor'
            },
            {
                _id: new mongoose.mongo.ObjectId(),
                year: 2019,
                semester: 2,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['5f8251631e35b9c347821094', '5f8251a7f7b6f2bf8f8c299e'],
                professor: 'id_professor'
            },
            {
                _id: new mongoose.mongo.ObjectId(),
                year: 2019,
                semester: 1,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['5f8251631e35b9c347821094', '5f8251631e35b9c347821094', '5f8251865e89f98fe5f91d4d'],
                professor: 'id_professor'
            },
        ]
    }

    const getAllTeamsByClassId = async (classId) => {
        const allTeams = await getAllTeams();
        const allTeamsByClassId = []; 

        allTeams.map((team) => {
            if(team.class.includes(classId)) {
                allTeamsByClassId.push(team);
            }
        });

        return allTeamsByClassId;
    }

exports.getAllTeams = getAllTeams;
exports.getAllTeamsByClassId = getAllTeamsByClassId;