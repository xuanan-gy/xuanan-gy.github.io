import * as msal from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "74dec8e7-1c67-4809-a716-d19ea9cd4c59",
        authority: "https://login.microsoftonline.com/21bb1d3e-726c-4f84-9339-51bc05929874",
        redirectUri: "http://localhost:3000/inventory.html",
        
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
    },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

export {msalInstance}