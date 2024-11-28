import { Router } from 'https://deno.land/x/oak/mod.ts';
import chatFactory from '../services/chatFactory.ts';
import queryWeather from '../services/weather.ts';

const router = new Router();

router.get('/what-to-wear', async (context) => {
    try {
        const client = await context.request.url.searchParams.get('client');
        const zip = await context.request.url.searchParams.get('zip');

        if (!zip) {
            context.response.body = 'Zip code parameter `zip` is required';
            context.response.status = 400;
            return;
        }

        const weatherDetails = await queryWeather(zip);
        const message = `The weather forecast for today for zip code ${zip}
            is that it will be ${weatherDetails.summary}
            with a high of ${weatherDetails.maxTemp} and a low of ${weatherDetails.minTemp}.
            The wind will be ${weatherDetails.maxWind}.
            It will ${weatherDetails.willRain ? 'rain' : 'not rain'} and ${
                weatherDetails.willSnow ? 'snow' : 'not snow'
            }.
            Please suggest what kind of clothes I should wear today—don't mention shoes.
            Be brief, using 75 words or less. Include the day's high.`;
        const chatClient = chatFactory(client);

        context.response.body = await chatClient(message);
    } catch (error) {
        console.error('Error interacting with API:', error.message);

        context.response.body = { error: `Failed to fetch response.` };
        context.response.status = 500;
    }
});

export default router;
