import { buildContext } from "../src/app";
export type PromiseType<T> = T extends Promise<infer U> ? U : T;

declare module 'mercurius' {
  interface MerucuriusContext extends PromiseType<typeof buildContext> {}
}
