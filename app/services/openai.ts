import { OpenAI } from 'openai';

const openai = new OpenAI();

const chatGpt = async (message) => {
    const response = await openai.chat.completions.create({
        model: Deno.env.get('OPENAI_MODEL') || 'gpt-4o-mini',
        messages: [{ role: 'user', content: message }],
    });

    return response.choices[0].message.content;
};

export default chatGpt;
