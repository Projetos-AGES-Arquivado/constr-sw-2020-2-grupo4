

//mongoose
var ClassModel = require('../model/ClassModel');

const insertService = async (data) => {
    //insert into

    aulas = new ClassModel({ data });
    try {
    console.log('insert from data from service ', data);
    resultado = await aulas.save();
    console.log('salvo no banco ', resultado);
    } catch(error) {
        console.log('error ', error);
    }

    return resultado;
}

exports.insertService = insertService;
