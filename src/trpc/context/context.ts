import { cache } from "react";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch"
import { TRPCError } from "@trpc/server";
const MAX_BATCH_SIZE = 10;
const trpcContext = async (opts: FetchCreateContextFnOptions) => {
    if (opts?.info?.calls?.length > MAX_BATCH_SIZE) {
        throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: `Batch size limit of ${MAX_BATCH_SIZE} exceeded`,
        });
    }
    return {};
}
const createTRPCContext = cache(trpcContext);

export default createTRPCContext;
export type Context = Awaited<ReturnType<typeof createTRPCContext>>