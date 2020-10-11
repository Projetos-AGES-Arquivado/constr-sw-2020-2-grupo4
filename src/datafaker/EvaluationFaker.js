var mongoose = require('mongoose');

    const getAllEvaluations = async () => {
        return [
            {
            _id: new mongoose.mongo.ObjectId(),
            name: 'Avaliacao de BD',
            score: 100.0,
            description: 'Avaliação realizada no laboratório',
            class: 'id3',
            type: 'G1',
            questions: [
                {
                    _id: '1234',
                    question: 'Qual o comando realizado para buscar dados do banco de dados?',
                    answer: 'SELECT'
                },
                {
                    _id: '5678',
                    question: 'Qual o comando para inserir dados?',
                    answer: 'INSERT'
                },
                {
                    _id: '1234',
                    question: 'Qual o comando para criar uma tabela?',
                    answer: 'CREATE TABLE'
                },
                {
                    _id: '1234',
                    question: 'Qual a maneira correta de efetuar uma remoção de dados?',
                    answer: 'DELETE FROM <tabela>; --nao utilizar where'
                },
            ]
            },
            {
                _id: new mongoose.mongo.ObjectId(),
                name: 'Avaliacao de BD',
                score: 100.0,
                class: 'id2',
                description: 'Avaliação realizada no laboratório',
                type: 'G1',
                questions: [
                    {
                        _id: '1234',
                        question: 'Qual o comando realizado para buscar dados do banco de dados?',
                        answer: 'SELECT'
                    },
                    {
                        _id: '5678',
                        question: 'Qual o comando para inserir dados?',
                        answer: 'INSERT'
                    },
                    {
                        _id: '1234',
                        question: 'Qual o comando para criar uma tabela?',
                        answer: 'CREATE TABLE'
                    },
                    {
                        _id: '1234',
                        question: 'Qual a maneira correta de efetuar uma remoção de dados?',
                        answer: 'DELETE FROM <tabela>; --nao utilizar where'
                    },
                ]
                },
                {
                    _id: new mongoose.mongo.ObjectId(),
                    name: 'Avaliacao de BD',
                    score: 100.0,
                    class: 'id1',
                    description: 'Avaliação realizada no laboratório',
                    type: 'G1',
                    questions: [
                        {
                            _id: '1234',
                            question: 'Qual o comando realizado para buscar dados do banco de dados?',
                            answer: 'SELECT'
                        },
                        {
                            _id: '5678',
                            question: 'Qual o comando para inserir dados?',
                            answer: 'INSERT'
                        },
                        {
                            _id: '1234',
                            question: 'Qual o comando para criar uma tabela?',
                            answer: 'CREATE TABLE'
                        },
                        {
                            _id: '1234',
                            question: 'Qual a maneira correta de efetuar uma remoção de dados?',
                            answer: 'DELETE FROM <tabela>; --nao utilizar where'
                        },
                    ]
                    },
    ]
    }

    const getAllEvaluationsByClassId = async (classId) => {
        const allEvaluations = await getAllEvaluations();
        const correctEvaluations = [];

        allEvaluations.map((evaluation) => {
            if(evaluation.class === classId)
                correctEvaluations.push(evaluation);
        });
        
        return correctEvaluations;
    }

exports.getAllEvaluations = getAllEvaluations;
exports.getAllEvaluationsByClassId = getAllEvaluationsByClassId;