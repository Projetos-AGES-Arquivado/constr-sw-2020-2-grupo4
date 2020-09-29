const hapi = require('@hapi/hapi');
const joi = require('joi');
const mongoose = require('mongoose');

/* MongoDb connection */
mongoose.connect("mongodb://admin:admin@localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true });

//const ClassModel = mongoose.model("class", {
//    date: String
//});

const init = async () => {

    const server = hapi.server({
        port: 3000,
        host: '0.0.0.0'
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