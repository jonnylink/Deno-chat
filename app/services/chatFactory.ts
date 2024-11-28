import chatGpt from './openai.ts';
import chatAnthropic from './anthropic.ts';

const chatFactory = (client) => {
    if (client.toLowerCase() === 'anthropic') {
        return chatAnthropic;
    } else {
        return chatGpt;
    }
};

export default chatFactory;
