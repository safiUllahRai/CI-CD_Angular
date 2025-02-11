

import { LogLevel, Configuration, BrowserCacheLocation } from '@azure/msal-browser';

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;
export const msalConfig: Configuration = {
    auth: {
        clientId: '96604d1a-de62-4695-9b2c-c9b49d079ed0', // This is the ONLY mandatory field that you need to supply.
        authority: 'https://login.microsoftonline.com/ff378a72-de37-4bb8-848d-45cf1eee5dc5', // Defaults to "https://login.microsoftonline.com/common"
         redirectUri: 'http://10.20.24.129/auth-callback/',
         //redirectUri: 'http://localhost:4200/auth-callback/',
       //redirectUri: 'https://tmc-attendance-2a573.web.app/auth-callback/',
       // redirectUri: 'https://portal-tmc.web.app/auth-callback/',
        //redirectUri:'https://attendance.tallymarkscloud.com/auth-callback/', // Points to window.location.origin. You must register this URI on Azure portal/App Registration.
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: true, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage, // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: isIE, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback(logLevel: LogLevel, message: string) {
              //  console.log("message",message, "logger level", logLevel);
            },
            logLevel: LogLevel.Verbose,
            piiLoggingEnabled: false
        }
    }
    
};

export const protectedResources = {
    graphMe: {
        endpoint: 'https://graph.microsoft.com/v1.0/me',
        scopes: ['User.Read'],
    }
};
/**
 * An optional silentRequest object can be used to achieve silent SSO
 * between applications by providing a "login_hint" property.
 */
export const loginRequest = {
    scopes: ['User.Read'],
};


