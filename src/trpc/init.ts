import { initTRPC } from '@trpc/server';
import { Context } from './context/context';
import { trpcErrorFormater } from './utils/error-formatter';

const t = initTRPC.context<Context>().create({
    errorFormatter: trpcErrorFormater,
});
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const publicProcedure = baseProcedure;