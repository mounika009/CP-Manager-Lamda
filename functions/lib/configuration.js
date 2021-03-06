"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = {
    'dev': {
        database: 'irestore-cp-manager-dev',
        api: {
            host: 'dev.irestore.info',
            port: 443,
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpUmVzdG9yZSIsImF1ZCI6ImdlbmVyYWwiLCJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImlhdCI6MTQ2OTA4NzYwMX0.48fKAGieV0j9kQDu9wlaLi6a1B837nuCqthJmROSy-0',
            accountKey: 'general',
        },
    },
    'beta': {
        database: 'irestore-cp-manager-beta',
        api: {
            host: 'api-beta.irestore.info',
            port: 443,
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpUmVzdG9yZSIsImF1ZCI6ImdlbmVyYWwiLCJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImlhdCI6MTQ2OTA4NzYwMX0.48fKAGieV0j9kQDu9wlaLi6a1B837nuCqthJmROSy-0',
            accountKey: 'general',
        },
    },
    'prod': {
        database: 'irestore-cp-manager-prod',
        api: {
            host: 'api.irestore.info',
            port: 443,
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJpUmVzdG9yZSIsImF1ZCI6ImdlbmVyYWwiLCJzdWIiOiJhdXRoZW50aWNhdGlvbiIsImlhdCI6MTQ2OTA4NzYwMX0.48fKAGieV0j9kQDu9wlaLi6a1B837nuCqthJmROSy-0',
            accountKey: 'general',
        },
    },
};
exports.routes = {
    'dev': {
        createAsset: {
            path: '/v1/assets/',
            method: 'POST'
        },
        updateAsset: {
            path: '/v1/assets/',
            method: 'PUT'
        },
        deleteAsset: {
            path: '/v1/assets/',
            method: 'DELETE'
        }
    },
    'beta': {
        createAsset: {
            path: '/v1/assets/',
            method: 'POST'
        },
        updateAsset: {
            path: '/v1/assets/',
            method: 'PUT'
        },
        deleteAsset: {
            path: '/v1/assets/',
            method: 'DELETE'
        }
    },
    'prod': {
        createAsset: {
            path: '/v1/assets/',
            method: 'POST'
        },
        updateAsset: {
            path: '/v1/assets/',
            method: 'PUT'
        },
        deleteAsset: {
            path: '/v1/assets/',
            method: 'DELETE'
        }
    }
};
//# sourceMappingURL=configuration.js.map