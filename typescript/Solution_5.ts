// Implement RequireAtLeastOne so an empty object throws a TS error, 
// but passing any single key from Config is valid.
type Config = {
    retries?: number;
    timeout?: number;
    fallbackUrl?: string;
};

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Keys extends any ? {
    [K in keyof T as K extends Keys ? K : never] -?: T[K]
} : never;

type ValidConfig = RequireAtLeastOne<Config>;

const config1: ValidConfig = { retries: 3 }; // Valid
const config2: ValidConfig = { timeout: 1000, fallbackUrl: "..." }; // Valid
// const config3: ValidConfig = {}; // TS Error: Property missing