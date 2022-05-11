import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('627b838383fc31af7474') // Your project ID
;

export const account = sdk.account;