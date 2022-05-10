import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('627938eec83c17f9ca68') // Your project ID
;

export const account = sdk.account;