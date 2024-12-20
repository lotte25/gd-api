const constants = require("../constants");

async function request(endpoint, data, secret = constants.SECRETS.COMMON) {

    const requestData = Object.assign(
        { secret }, 
        data, 
        constants.VERSIONS
    );

    const request = await fetch(`${constants.DEFAULT_SERVER}/${constants.DEFAULT_ENDPOINTS[endpoint]}`, {
        method: "POST",
        headers: constants.DEFAULT_HEADERS_22,
        body: new URLSearchParams(requestData)
    });

    const response = await request.text();

    return {
        status: response !== "-1",
        data: response
    };
};

module.exports = request;