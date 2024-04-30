import { z } from 'zod';

import { publicProcedure, router } from '@api/trpc';

export const schema = z.object({
  name: z.string(),
});

export const helloRouter = router({
  get: publicProcedure.input(schema).query(async ({ input }) => ({ success: true, message: `Hello ${input.name}!` })),
});
