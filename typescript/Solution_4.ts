type ApiRoute = "/users/:userId/posts/:postId/comments/:commentId";
// Implement ExtractRouteParamstype Params = ExtractRouteParams<ApiRoute>;
// Expected Ans: "userId" | "postId" | "commentId"

type ExtractRouteParams<T> = T extends `${any}:${infer Param}/${infer Rest}` ? Param | ExtractRouteParams<Rest> : T extends `${any}/:${infer Param}` ? Param : never; 

type Params = ExtractRouteParams<ApiRoute>;