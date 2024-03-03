import { defineMiddleware } from 'astro/middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (context.url.pathname.includes('well-known')) {
    response.headers.set('content-type', 'application/json');
  }

  return response;
});
