var mongoose = require('mongoose');

    const getAllContents = async () => {
        return [
            {
                _id: 'id',
                name: 'Banco de Dados I',
                description: 'Descrição sobre o conteúdo de banco de dados Oracle',
                classes: ['id1', 'id2', 'id3', 'id4'],
                materials: [
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                ],
                bibliography: [
                    {
                        _id: 'id',
                        name: 'Engenheria de Software - Sommerville'
                    },
                    {
                        _id: 'id',
                        name: 'Engenharia de Requisitos - Marczakville'
                    },
                    {
                        _id: 'id',
                        name: 'Engenharia de Banco de Dados - Callegariville'
                    }
                    
                ]
            },
            {
                _id: 'id',
                name: 'Banco de Dados II',
                description: 'Descrição sobre o conteúdo de banco de dados Oracle AVANÇADO',
                classes: ['id1', 'id4', 'id5', 'id6', 'id7'],
                materials: [
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                    {
                        _id: 'id',
                        description: 'Alguma descrição sobre o material 1',
                        url: 'www.biblioteca.com.br'
                    },
                ],
                bibliography: [
                    {
                        _id: 'id',
                        name: 'Engenheria de Software - Sommerville'
                    },
                    {
                        _id: 'id',
                        name: 'Engenharia de Requisitos - Marczakville'
                    },
                    {
                        _id: 'id',
                        name: 'Engenharia de Banco de Dados - Callegariville'
                    }
                    
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