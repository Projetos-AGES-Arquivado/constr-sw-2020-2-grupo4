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


const externalDeleteEvaluationWithId = async (id) => {
    const options = {
        hostname: EvaluationExternalService.HOSTNAME,
        path: `${EvaluationExternalService.DELETE}/${id}`,
        port: EvaluationExternalService.PORT,
        method: HttpMethod.DELETE
    };
    var response = await HttpRequests.sendRequest('', options);
    return JSON.parse(response)
}

const postEvaluationWithId = async (payload, id) => {
    const options = {
        hostname: EvaluationExternalService.HOSTNAME,
        path: `${EvaluationExternalService.POST}/${id}`,
        port: EvaluationExternalService.PORT,
        method: HttpMethod.POST
    };
    console.log(JSON.parse(payload))
    var response = await HttpRequests.sendRequest(payload, options);
    return JSON.parse(response)
}
exports.externalGetAllEvaluations = externalGetAllEvaluations;
exports.externalGetEvaluationWithId = externalGetEvaluationWithId;
exports.externalDeleteEvaluationWithId = externalDeleteEvaluationWithId;
exports.postEvaluationWithId = postEvaluationWithId;