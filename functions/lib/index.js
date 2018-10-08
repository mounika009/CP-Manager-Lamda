"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const handlers_1 = require("./handlers");
const firebasePaths = {
    asset: `{tenant}/assets/{assetId}`
};
// initialize the firebase admin SDK to get access to the DB
admin.initializeApp(functions.config().firebase);
exports.assetSync = functions.database
    .instance('irestore-cp-manager-dev')
    .ref(firebasePaths.asset)
    .onCreate((event) => __awaiter(this, void 0, void 0, function* () {
    return yield handlers_1.createAsset(event, 'dev')
        .catch((error) => {
        console.log('error', `An error occurred while syncing new asset`);
        console.log('error', `Error is `, error);
        return null;
    });
}));
exports.assetDelete = functions.database
    .instance('irestore-cp-manager-dev')
    .ref(firebasePaths.asset)
    .onDelete((event) => __awaiter(this, void 0, void 0, function* () {
    return yield handlers_1.deleteAsset(event, 'dev')
        .catch((error) => {
        console.log('error', `An error occurred while syncing deleting asset`);
        console.log('error', `Error is `, error);
        return null;
    });
}));
//# sourceMappingURL=index.js.map