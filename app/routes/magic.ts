import { Router } from 'https://deno.land/x/oak/mod.ts';
import chatFactory from '../services/chatFactory.ts';

const router = new Router();

router.get('/magic', async (context) => {
    try {
        const client = await context.request.url.searchParams.get('client');
        const message = 'Write a short piece of magical realism that is 200 words or less.';
        const chatClient = chatFactory(client);

        context.response.body = await chatClient(message);
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        context.response.body = { error: `Failed to fetch response.` };
        context.response.status = 500;
    }
});

export default router;
