import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/health', (context) => {
    context.response.body = 'ok';
});

export default router;
