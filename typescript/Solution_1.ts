type User = {
    id: number;
    name: string;
    age: number;
    isAdmin: boolean;
    role: string;
};
// Implement PickByTypetype StringProps = PickByType<User, string>;
// Expected Ans: { name: string; role: string; }

type PickByType<T, K> = {
    [Key in keyof T as T[Key] extends K ? Key : never]: T[Key]
}

type StringProps = PickByType<User, string>;