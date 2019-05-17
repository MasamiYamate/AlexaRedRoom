const template = require('./response-template');

module.exports = {
    template: template,
    displayDeviceCheck: displayDeviceCheck,
    getAccessToken: getAccessToken
}

/* ディスプレイ付きデバイスであるか判別をする */
function displayDeviceCheck (handlerInput) {
    const context = handlerInput.requestEnvelope.context;
    if (context) {
        const system = context.System;
        if (system) {
            const device = system.device;
            if (device) {
                const supportedInterfaces = device.supportedInterfaces;
                if (supportedInterfaces) {
                    const display = supportedInterfaces.Display;
                    if (display) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

/* アクセストークンの有無を取得します */
function getAccessToken (handlerInput) {
    let session = handlerInput.requestEnvelope.session;
    if (session) {
        let user = session.user;
        if (user) {
            let token = user.accessToken;
            if (token) {
                return token;
            }
        }
    }
    return null;
}