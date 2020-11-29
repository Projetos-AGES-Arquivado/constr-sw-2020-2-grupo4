const HttpRequests = require('../external/HttpRequests');
const HttpMethod = require('../config/HTTPMethod');
const TeamExternalService = require('../config/TeamExternalService');

const externalGetTeamsbyId = async (id) => {
    const options = {
        hostname: TeamExternalService.HOSTNAME,
        path: TeamExternalService.GET,
        port: TeamExternalService.PORT,
        method: HttpMethod.GET
    };

    var response =  await HttpRequests.sendRequest('', options);

    let teamsList = []
    response = JSON.parse(response)
    for (let i = 0; i < response.length; i++) {
        if (response[i]._id === id) {
            teamsList.push(response[i])
        }
    }

    return teamsList
}

const externalGetTeamById = async (id) => {
    const options = {
        hostname: TeamExternalService.HOSTNAME,
        path: `${TeamExternalService.GET}/${id}`,
        port: TeamExternalService.PORT,
        method: HttpMethod.GET
    };
    let response;
    try{
        response = await HttpRequests.sendRequest('', options);
        (response);
    }catch(e){}
    return response;
}

exports.externalGetTeamsbyId = externalGetTeamsbyId;
exports.externalGetTeamById = externalGetTeamById;