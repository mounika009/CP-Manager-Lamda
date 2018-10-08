'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
const configuration_1 = require("./configuration");
exports.createAsset = (event, environment) => __awaiter(this, void 0, void 0, function* () {
    try {
        const newAssetData = event.data.val();
        const tenant = event.params.tenant;
        console.log('info', `Saving asset created in ${tenant} tenant`);
        console.log('info', `Asset data is `, newAssetData);
        const data = JSON.stringify({
            "Assets": [newAssetData]
        });
        const result = yield new request_1.default().makeRequest(tenant, configuration_1.configuration[environment], configuration_1.routes[environment].createAsset, data);
        console.log('info', `Result is `, result);
        return true;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteAsset = (event, environment) => __awaiter(this, void 0, void 0, function* () {
    try {
        const tenant = event.params.tenant;
        console.log('info', `Deleting Asset for ${tenant} tenant`);
        let asset = null;
        if (event.data.exists())
            asset = event.data.val();
        console.log('info', `asset deleted is `, asset);
        const assetId = event.params.asset;
        console.log('info', `Asset Id is ${assetId}`);
        const requestData = JSON.stringify({
            "assetId": assetId
        });
        const httpResult = yield new request_1.default().makeRequest(tenant, configuration_1.configuration[environment], configuration_1.routes[environment].deleteAsset, requestData);
        console.log('info', `Result is ${JSON.stringify(httpResult)}`);
        return true;
    }
    catch (error) {
        throw error;
    }
});
//# sourceMappingURL=handlers.js.map