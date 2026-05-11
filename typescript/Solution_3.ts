type SyncFn = (id: number, name: string) => boolean;
// Implement Promisify 
// Expected Ans: (id: number, name: string) => Promise<boolean>
type Promisify<T> = T extends (...args: infer A) => infer R ? (...args: A) => Promise<R> : never;
type AsyncFn = Promisify<SyncFn>; 