import { initTRPC, type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import type { Request, Response } from 'express';
import superjson from 'superjson';

import type { AppRouter } from '@api/router';

type Context = {
  req: Request;
  res: Response;
};

const trpc = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const publicProcedure = trpc.procedure;
export const router = trpc.router;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
