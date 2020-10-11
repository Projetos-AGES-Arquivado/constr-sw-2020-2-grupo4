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
            classes: ['12345', '54321', '93481']
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
            classes: ['12345', '54321', '93481']
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
            classes: ['12345', '54321', '93481']
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
            classes: ['12345', '54321', '93481']
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
            classes: ['54321', '93481']
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