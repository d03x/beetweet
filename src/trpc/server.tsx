import 'server-only'; // <-- ensure this file cannot be imported from the client
import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cache } from 'react';
import { createCallerFactory } from './init';
import { makeQueryClient } from './query-client';
import { appRouter } from './routes/_app';
import createTRPCContext from './context/context';
export const getQueryClient = cache(makeQueryClient);


const caller = createCallerFactory(appRouter)(createTRPCContext);
export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
);

