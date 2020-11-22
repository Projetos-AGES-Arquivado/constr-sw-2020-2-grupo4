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
        if (response[i].aulas.includes(id)) {
            teamsList.push(response[i])
        }
    }

    return teamsList
}

exports.externalGetTeamsbyId = externalGetTeamsbyId;

