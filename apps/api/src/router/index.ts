import { router } from '@api/trpc';
import { helloRouter } from '@api/router/hello';

export const appRouter = router({
  hello: helloRouter,
});

export type AppRouter = typeof appRouter;
