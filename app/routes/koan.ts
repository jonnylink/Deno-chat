import { Router } from 'https://deno.land/x/oak/mod.ts';
import chatFactory from '../services/chatFactory.ts';

const router = new Router();

router.get('/koan', async (context) => {
    try {
        const client = await context.request.url.searchParams.get('client');
        const message = 'Tell me another zen koan. Do not include any additional commentary.';
        const chatClient = chatFactory(client);

        context.response.body = await chatClient(message);
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        context.response.body = { error: `Failed to fetch response.` };
        context.response.status = 500;
    }
});

export default router;
