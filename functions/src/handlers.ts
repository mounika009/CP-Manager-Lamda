'use strict';

import Request from "./request";
import {configuration, routes} from './configuration';

export const createAsset = async (event: any, environment: string) => {
    try {
        const newAssetData    = event.data.val();
        const tenant             = event.params.tenant;

        console.log('info', `Saving asset created in ${tenant} tenant`);
        console.log('info', `Asset data is `, newAssetData);

        const data = JSON.stringify({
            "Assets": [newAssetData]
        });

        const result = await new Request().makeRequest(tenant, configuration[environment], routes[environment].createAsset, data);

        console.log('info', `Result is `, result);

        return true;
    } catch (error) {
        throw error;
    }
};

export const deleteAsset = async (event: any, environment: string) => {
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

        const httpResult = await new Request().makeRequest(tenant, configuration[environment], routes[environment].deleteAsset, requestData);

        console.log('info', `Result is ${JSON.stringify(httpResult)}`);

        return true;
    } catch (error) {
        throw error;
    }
};

