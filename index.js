const Alexa = require('ask-sdk-core')

const skillBuilder = Alexa.skillBuilder.custom();

exports.handler = skillBuilder
    .addRequestHandlers(
        Common.HelpIntentRequest,
        Common.SkillEndHandler
    )
    .addErrorHandlers(
        Common.ErrorHandler
    )
    .lambda();
