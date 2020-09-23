const hapi = require('@hapi/hapi');
const joi = require('joi');
const mongoose = require('mongoose');

/* MongoDb connection */
//mongoose.connect("mongodb://localhost/class", { useNewUrlParser: true, useUnifiedTopology: true });

//const ClassModel = mongoose.model("class", {
//    date: String
//});

const init = async () => {

    const server = hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: "GET",
        path: "/class",
        handler: async (request, resp) => {
            try {
                //let classes = await ClassModel.find().exec();
                var data = {
                    success: "true",
                    message: "Classes retrieved successfully",
                    //classes : classes
                    classes: [],
                }
                return resp.response(data);
            } catch (error) {
                return resp.response(error).code(500);
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();