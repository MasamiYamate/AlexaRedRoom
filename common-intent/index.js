module.exports = {
    SkillEndHandler: SkillEndHandler,
    HelpIntentRequest: HelpIntentRequest,
    ErrorHandler: ErrorHandler
}

//スキル終了のhandler
const SkillEndHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return (request.type === 'IntentRequest' && request.intent.name === 'AMAZON.CancelIntent')
            || (request.type === 'IntentRequest' && request.intent.name === 'AMAZON.StopIntent')
            || (request.type === 'SessionEndedRequest' && request.type === 'USER_INITIATED');
    },
    handle(handlerInput) {
        return defaultRes.skillCloseResponse(handlerInput);
    }
}

//ヘルプリクエスト時のHandler
const HelpIntentRequest = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request
        return (request.type === 'IntentRequest' && request.intent.name === 'AMAZON.HelpIntent')
    },
    async handle(handlerInput) {
        return defaultRes.helpResponse(handlerInput)
    }
}

//エラー発生時のインテントハンドラー
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);

        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please sa')
            .getResponse();
    },
};