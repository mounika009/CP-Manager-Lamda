import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {createAsset,deleteAsset} from "./handlers";

interface IFirebaseConfiguration {
    [item: string]: string;
}

const firebasePaths: IFirebaseConfiguration = {
    asset            : `{tenant}/assets/{assetId}`
};

// initialize the firebase admin SDK to get access to the DB
admin.initializeApp(functions.config().firebase);

export const assetSync = functions.database
    .instance('irestore-cp-manager-dev')
    .ref(firebasePaths.asset)
    .onCreate(async (event) => {

        return await createAsset(event, 'dev')
            .catch((error) => {
                console.log('error', `An error occurred while syncing new asset`);
                console.log('error', `Error is `, error);

                return null;
            });
    });

export const assetDelete = functions.database
    .instance('irestore-cp-manager-dev')
    .ref(firebasePaths.asset)
    .onDelete(async (event) => {
        return await deleteAsset(event, 'dev')
            .catch((error) => {
                console.log('error', `An error occurred while syncing deleting asset`);
                console.log('error', `Error is `, error);

                return null;
            });
    });
