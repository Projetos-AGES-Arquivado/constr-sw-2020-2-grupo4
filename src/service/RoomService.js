const HttpRequests = require('../external/HttpRequests');
const HttpMethod = require('../config/HTTPMethod');
const RoomExternalService = require('../config/RoomExternalService');

const externalGetAllRooms = async () => {
    const options = {
        hostname: RoomExternalService.HOSTNAME,
        path: RoomExternalService.GET,
        port: RoomExternalService.PORT,
        method: HttpMethod.GET
    };

    const externalResponse = await HttpRequests.sendRequest('', options);

    return JSON.parse(externalResponse);
}

const externalGetRoomById = async (id) => {
    const options = {
        hostname: RoomExternalService.HOSTNAME,
        path: `${RoomExternalService.GET}${id}`,
        port: RoomExternalService.PORT,
        method: HttpMethod.GET
    };
    
    let externalResponse;

    try {
        externalResponse = await HttpRequests.sendRequest('', options);
        if (externalResponse === 'Not Found') {
            externalResponse = {
                status_code: 404,
                message: 'Not Found'
            };

            return externalResponse;
        }
    } catch (error) {
        console.log('something happened on external service call! ', error);
        return error;
    }

    console.log('externalResponse');
    return JSON.parse(externalResponse);
}

exports.externalGetAllRooms = externalGetAllRooms;
exports.externalGetRoomById = externalGetRoomById;