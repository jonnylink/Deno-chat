import { Router } from 'https://deno.land/x/oak/mod.ts';
import chatFactory from '../services/chatFactory.ts';

const router = new Router();

router.post('/chat', async (context) => {
    try {
        const { message } = await context.request.body.json();
        const client = await context.request.url.searchParams.get('client');

        if (!message) {
            context.response.body = 'Message `message` is required in the POST body';
            context.response.status = 400;
            return;
        }

        const chatClient = chatFactory(client);

        context.response.body = await chatClient(message);
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        context.response.body = { error: `Failed to fetch response.` };
        context.response.status = 500;
    }
});

export default router;





// const express = require('express');
// const { chatFactory } = require('../chatFactory');

// const router = express.Router();

// router.post('/chat', async (req, res) => {
//     try {
//         const { message } = req.body;
//         const { client } = req.query;

//         if (!message) {
//             return res.status(400).json({ error: 'Message is required' });
//         }

//         const chatClient = chatFactory(client);
//         const reply = await chatClient(message);

//         res.json({ reply });
//     } catch (error) {
//         console.error('Error interacting with API:', error.message);

//         res.status(500).json({ error: `Failed to fetch response from ${system}` });
//     }
// });

// module.exports = router;
