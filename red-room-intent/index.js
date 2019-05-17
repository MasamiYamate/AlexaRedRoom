const util = require('../utility');
const template = util.template;

module.exports = {
    LaunchRequestHandler: LaunchRequestHandler
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        return defaultRes.skillCloseResponse(handlerInput);
    }
}

async function createLaunchResponse(handlerInput) { 
    let accountLinkToken = util.getAccessToken(handlerInput);
    if (accountLinkToken) {
        //Tokenがある場合の返答内容
    } else { 
        //Tokenがない場合の返答内容
    }
}

async function notfoundTokenLaunchResponse(handlerInput) { 
    return handlerInput.responseBuilder
        .speak(responseMessage)
        .withLinkAccountCard()
        .withShouldEndSession(true)
        .getResponse();
}