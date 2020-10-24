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

    return await HttpRequests.sendRequest('', options);
}

exports.externalGetAllRooms = externalGetAllRooms;