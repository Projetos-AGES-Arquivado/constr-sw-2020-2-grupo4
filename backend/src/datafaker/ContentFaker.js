var mongoose = require('mongoose');

    const getAllContents = async () => {
        return [
            {
                _id: mongoose.mongo.ObjectId(),
                name: 'Banco de Dados I',
                description: 'Conteúdo sobre INSERT, DELETE e UPDATE',
                classes: [
                    '5f8251631e35b9c347821094',
                    '5f8251865e89f98fe5f91d4d',
                    '5f8251942c42fa47ae09f7eb',
                    '5f8251a7f7b6f2bf8f8c299e'
                ],

                materials: [
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        description: 'Explicação sobre DML - Prof. Eduardo Arruda',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        description: 'Explicação sobre INSERT - Prof. Eduardo Arruda e Daniel Callegari',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        description: 'ORACLE Database - Prof. Daniel Callegari',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        description: 'MySQL Database - Prof. Eduardo Arruda',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        description: 'No-SQL - Prof. Eduardo Arruda',
                        url: 'www.biblioteca.com.br'
                    },
                ],
                bibliography: [
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        name: 'Banco de Dados - Teoria e Prática'
                    },
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        name: 'Oracle BD - The Definitive Guide'
                    },
                    {
                        _id: '5f8251a7f7b6f2bf8f8c299e',
                        name: 'MySQL for Dummies'
                    }
                    
                ]
            },
            {
                _id: 'id',
                name: 'Banco de Dados II',
                description: 'Inner, full, left e right joins',
                classes: [
                    '5f8251631e35b9c347821094',
                    '5f8251865e89f98fe5f91d4d'
                ],
                materials: [
                    {
                        _id: '5f8251865e89f98fe5f91d4d',
                        description: 'Video aula sobre INNER JOIN - Prof. Daniel Callegari',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: '5f8251865e89f98fe5f91d4d',
                        description: 'Video aula sobre LEFT e RIGH JOINS - Prof. Eduardo Arruda',
                        url: 'www.biblioteca.com.br'
                    },
                ],
                bibliography: [
                    {
                        _id: '5f8251865e89f98fe5f91d4d',
                        name: 'JOINS - The Definitive Guide'
                    },                   
                ]
            }
        ]
    }

    const getAllContentsByClassId = async (classId) => {
        const allContents = await getAllContents();
        const allContentsByClass = [];

        allContents.map((content) => {
            if(content.classes.includes(classId)) {
                console.log('content if ', content);
                allContentsByClass.push(content);
            }
        });

        return allContentsByClass;
    }

exports.getAllContents = getAllContents;
exports.getAllContentsByClassId = getAllContentsByClassId;