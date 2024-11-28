import { Anthropic } from 'anthropic';

const anthropic = new Anthropic({
    apiKey: Deno.env.get('ANTHROPIC_API_KEY')
});

const chatAnthropic = async (message) => {
    const response = await anthropic.messages.create({
        model: Deno.env.get('ANTHROPIC_MODEL') || 'claude-3-5-haiku-20241022',
        max_tokens: 1024,
        messages: [{
            role: 'user',
            content: message,
        }],
    });

    return response.content[0].text;
};

export default chatAnthropic;

