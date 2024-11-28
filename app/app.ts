import { Application } from 'https://deno.land/x/oak/mod.ts';
import chatRouter from './routes/chat.ts';
import healthRouter from './routes/health.ts';
import koanRouter from './routes/koan.ts';
import magicRouter from './routes/magic.ts';
import weatherRouter from './routes/weather.ts';

const app = new Application();

app.use(chatRouter.routes());
app.use(chatRouter.allowedMethods());

app.use(healthRouter.routes());
app.use(healthRouter.allowedMethods());


app.use(koanRouter.routes());
app.use(koanRouter.allowedMethods());

app.use(magicRouter.routes());
app.use(magicRouter.allowedMethods());

app.use(weatherRouter.routes());
app.use(weatherRouter.allowedMethods());
export default app;
