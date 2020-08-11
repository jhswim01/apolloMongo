export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): sayHelloResponse!\n  kitty: String\n}\n\ntype sayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype kittyResponse {\n  ok: Boolean!\n  kitty: String\n  text: String\n  error: String\n}\n\ntype Mutation {\n  kitty(name: String!): kittyResponse\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: sayHelloResponse;
  kitty: string | null;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface sayHelloResponse {
  text: string;
  error: boolean;
}

export interface Mutation {
  kitty: kittyResponse | null;
}

export interface KittyMutationArgs {
  name: string;
}

export interface kittyResponse {
  ok: boolean;
  kitty: string | null;
  text: string | null;
  error: string | null;
}
