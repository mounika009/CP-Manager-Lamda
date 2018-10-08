'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const Buffer = require("buffer");
class Request {
    makeRequest(tenant, configuration, routes, data) {
        return new Promise(function (resolve, reject) {
            const user = data.submittedBy && data.submittedBy.userId ? data.submittedBy.userId : 0;
            const options = Request.createRequestOptions(configuration, routes, tenant, user, data);
            console.log('info', `HTTP Request options is `, options);
            const request = https.request(options, response => Request.responseHandler(response, resolve, reject));
            request.on('connect', () => {
                console.log('info', 'Connected to API');
            });
            request.on('error', (error) => {
                console.log('error', 'An error occurred while connecting to API!');
                console.log('error', `Error is `, error);
                //reject({error: true, statusCode: 500, message: 'An error occurred while connecting to API'});
                throw new Error('An error occurred while connecting to API');
            });
            console.log('info', `Data to send to the API is`, data);
            request.write(data);
            request.end();
        });
    }
    static createRequestOptions(configuration, routes, tenant, user, requestData) {
        return {
            host: configuration.api.host,
            port: configuration.api.port,
            path: routes.path,
            method: routes.method,
            headers: {
                'Content-Length': Buffer.Buffer.byteLength(requestData),
                'Content-Type': 'application/json',
                'x-access-token': configuration.api.accessToken,
                'x-account-key': configuration.api.accountKey,
                'x-referrer': tenant.toLowerCase(),
                'x-application': 'CPM',
                'x-user': user
            }
        };
    }
    static responseHandler(response, resolve, reject) {
        let report = '';
        response.setEncoding('utf8');
        response.on('data', function (data) {
            report += data;
        });
        response.on('end', function () {
            resolve({ error: false, statusCode: 200, message: 'Success', report: report });
        });
    }
}
exports.default = Request;
//# sourceMappingURL=request.js.map