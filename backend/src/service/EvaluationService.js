const HttpRequests = require('../external/HttpRequests');
const HttpMethod = require('../config/HTTPMethod');
const EvaluationExternalService = require('../config/EvaluationExternalService');

const externalGetAllEvaluations = async () => {
    const options = {
        hostname: EvaluationExternalService.HOSTNAME,
        path: EvaluationExternalService.GET,
        port: EvaluationExternalService.PORT,
        method: HttpMethod.GET
    };
    var response = await HttpRequests.sendRequest('', options);
    return JSON.parse(response)
}

const externalGetEvaluationWithId = async (id) => {
    const options = {
        hostname: EvaluationExternalService.HOSTNAME,
        path: `${EvaluationExternalService.GET}/${id}`,
        port: EvaluationExternalService.PORT,
        method: HttpMethod.GET
    };
    var response = await HttpRequests.sendRequest('', options);
    return JSON.parse(response)
}
exports.externalGetAllEvaluations = externalGetAllEvaluations;
exports.externalGetEvaluationWithId = externalGetEvaluationWithId;