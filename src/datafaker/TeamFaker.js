var mongoose = require('mongoose');

    const getAllTeams = async () => {
        return [
            {
                _id: 'idjbjdsfds',
                year: 2020,
                semester: 2,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['id_class1', 'id_class2', 'id_class3'],
                professor: 'id_professor'
            },
            {
                _id: 'id2',
                year: 2020,
                semester: 1,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['id_class1', 'id_class2', 'id_class3'],
                professor: 'id_professor'
            },
            {
                _id: 'id3',
                year: 2019,
                semester: 2,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['id_class1', 'id_class2', 'id_class3'],
                professor: 'id_professor'
            },
            {
                _id: 'id4',
                year: 2019,
                semester: 1,
                period: ['2', 'JK'],
                room: 'id_room',
                students: ['id_student1', 'id_student2', 'id_student3'],
                class: ['id_class4', 'id_class3', 'id_class5'],
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