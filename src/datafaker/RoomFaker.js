var mongoose = require('mongoose');

    const getAllocatedRooms = async () => {
        return [
            {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: ['5f8251a7f7b6f2bf8f8c299e', '5f8251631e35b9c347821094']
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Laboratório',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom1.com.br',
            capacity: 30,
            resources: [{
                name: 'Quadro branco',
                quantity: 1
            }],
            classes: ['5f8251942c42fa47ae09f7eb', '5f8251a7f7b6f2bf8f8c299e']
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: ['5f8251631e35b9c347821094']
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: ['5f8251631e35b9c347821094', '5f8251942c42fa47ae09f7eb']
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: ['5f8251942c42fa47ae09f7eb', '5f8251865e89f98fe5f91d4d']
        },
    ]
    }

    const getEmptyRooms = async () => {
        return [
            {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: []
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Laboratório',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom1.com.br',
            capacity: 30,
            resources: [{
                name: 'Quadro branco',
                quantity: 1
            }],
            classes: []
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: []
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: []
        },
        {
            _id: new mongoose.mongo.ObjectId(),
            type: 'Algum tipo',
            building: {
                number: 32,
                name: 'Prédio FACIN/Politécnica (Computação e Arquitetura)'
            },
            room: 230,
            presential: false,
            url: 'www.saladozoom.com.br',
            capacity: 30,
            resources: [{
                name: 'Projetor',
                quantity: 1
            }],
            classes: []
        },
    ]
    }

    const getRoomByClassId = async (classId) => {
        const allRooms = await getAllocatedRooms();

        const roomsByClass = [];

        allRooms.map((room) => {
            if(room.classes.includes(classId))
                roomsByClass.push(room);
        });

        return roomsByClass;
    }

exports.getAllocatedRooms = getAllocatedRooms;
exports.getEmptyRooms = getEmptyRooms;
exports.getRoomByClassId = getRoomByClassId;