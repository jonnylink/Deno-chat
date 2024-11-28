import app from './app/app.ts';

const port = Deno.env.get('PORT') || 3000;

if (import.meta.main) {
    console.log(`Server listening on port http://localhost:${port}`);
    await app.listen({ port });
}
