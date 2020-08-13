export const typeDefs = ["type Activity {\n  id: Int!\n  code: String!\n  typeOfWork: String!\n  name: String!\n  plannedCost: Float\n  actualCost: Float\n  progressRate: Float\n  plannedStartDate: String!\n  plannedEndDate: String!\n  actualStartDate: String!\n  actualEndDate: String!\n  plannedDuration: Int\n  actualDuration: Int\n  Completed: Boolean\n  Approved: Boolean\n  detail: String\n  item: [Item]\n  preActivity: [Activity]\n  postActivity: [Activity]\n  zone: Zone\n  issue: [Issue]\n  dailyLog: DailyLog\n  company: Company\n}\n\ntype DailyLog {\n  activity: Activity\n  company: Company\n  detail: String\n  user: User\n  createdAt: String!\n}\n\ntype Coords {\n  startX: Float\n  startY: Float\n  endX: Float\n  endY: Float\n}\n\ntype Cost {\n  unitCost: Float\n  totalCost: Float\n  currency: String\n}\n\ntype addCompanyResponse {\n  ok: Boolean\n  error: String\n  company: Company\n}\n\ntype Mutation {\n  addCompany(name: String!): addCompanyResponse\n  kitty(name: String!): kittyResponse\n  addUser(firstName: String!, lastName: String!): addUserResponse\n}\n\ntype Company {\n  _id: ID!\n  code: String\n  name: String\n  personInCharge: User\n  phoneNumber: String\n  typeOfWokr: [String]\n  project: [Project]\n  activity: [Activity]\n  issue: [Issue]\n  dailyLog: [DailyLog]\n  user: [User]\n}\n\ntype companyResponse {\n  ok: Boolean\n  error: String\n  company: Company\n}\n\ntype Query {\n  company(_id: ID!): companyResponse\n  sayBye: String!\n  sayHello(name: String!): sayHelloResponse!\n  kitty: String\n  user(_id: ID!): userResponse!\n}\n\ntype sayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Issue {\n  id: Int!\n  title: String!\n  type: String!\n  activity: Activity\n  rating: String\n  user: User\n  company: Company\n  status: String\n  photo: String\n  createdAt: String!\n}\n\ntype Item {\n  code: String!\n  name: String!\n  standard: String\n  unit: String\n  currency: String\n  quantity: Float\n  item: [Item]!\n  materialCost: Cost\n  laberCost: Cost\n  expenses: Cost\n  total: Cost\n  others: String\n  activity: [Activity]\n}\n\ntype kittyResponse {\n  ok: Boolean!\n  kitty: String\n  text: String\n  error: String\n}\n\ntype Project {\n  id: Int!\n  name: String!\n  adminUser: [User]!\n  activity: [Activity]\n  progressRate: Float\n  company: [Company]\n  user: [User]\n}\n\ntype Schedule {\n  name: String!\n}\n\ntype Statement {\n  activity: [Activity]!\n}\n\ntype addUserResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  _id: ID!\n  firstName: String!\n  lastName: String!\n}\n\ntype userResponse {\n  ok: Boolean\n  error: String\n  user: User\n}\n\ntype Zone {\n  project: String\n  building: String\n  floor: String\n  detail: String\n  coords: Coords\n  code: String\n  activity: [Activity]\n}\n"];
/* tslint:disable */

export interface Query {
  company: companyResponse | null;
  sayBye: string;
  sayHello: sayHelloResponse;
  kitty: string | null;
  user: userResponse;
}

export interface CompanyQueryArgs {
  _id: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface UserQueryArgs {
  _id: string;
}

export interface companyResponse {
  ok: boolean | null;
  error: string | null;
  company: Company | null;
}

export interface Company {
  _id: string;
  code: string | null;
  name: string | null;
  personInCharge: User | null;
  phoneNumber: string | null;
  typeOfWokr: Array<string> | null;
  project: Array<Project> | null;
  activity: Array<Activity> | null;
  issue: Array<Issue> | null;
  dailyLog: Array<DailyLog> | null;
  user: Array<User> | null;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface Project {
  id: number;
  name: string;
  adminUser: Array<User>;
  activity: Array<Activity> | null;
  progressRate: number | null;
  company: Array<Company> | null;
  user: Array<User> | null;
}

export interface Activity {
  id: number;
  code: string;
  typeOfWork: string;
  name: string;
  plannedCost: number | null;
  actualCost: number | null;
  progressRate: number | null;
  plannedStartDate: string;
  plannedEndDate: string;
  actualStartDate: string;
  actualEndDate: string;
  plannedDuration: number | null;
  actualDuration: number | null;
  Completed: boolean | null;
  Approved: boolean | null;
  detail: string | null;
  item: Array<Item> | null;
  preActivity: Array<Activity> | null;
  postActivity: Array<Activity> | null;
  zone: Zone | null;
  issue: Array<Issue> | null;
  dailyLog: DailyLog | null;
  company: Company | null;
}

export interface Item {
  code: string;
  name: string;
  standard: string | null;
  unit: string | null;
  currency: string | null;
  quantity: number | null;
  item: Array<Item>;
  materialCost: Cost | null;
  laberCost: Cost | null;
  expenses: Cost | null;
  total: Cost | null;
  others: string | null;
  activity: Array<Activity> | null;
}

export interface Cost {
  unitCost: number | null;
  totalCost: number | null;
  currency: string | null;
}

export interface Zone {
  project: string | null;
  building: string | null;
  floor: string | null;
  detail: string | null;
  coords: Coords | null;
  code: string | null;
  activity: Array<Activity> | null;
}

export interface Coords {
  startX: number | null;
  startY: number | null;
  endX: number | null;
  endY: number | null;
}

export interface Issue {
  id: number;
  title: string;
  type: string;
  activity: Activity | null;
  rating: string | null;
  user: User | null;
  company: Company | null;
  status: string | null;
  photo: string | null;
  createdAt: string;
}

export interface DailyLog {
  activity: Activity | null;
  company: Company | null;
  detail: string | null;
  user: User | null;
  createdAt: string;
}

export interface sayHelloResponse {
  text: string;
  error: boolean;
}

export interface userResponse {
  ok: boolean | null;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  addCompany: addCompanyResponse | null;
  kitty: kittyResponse | null;
  addUser: addUserResponse | null;
}

export interface AddCompanyMutationArgs {
  name: string;
}

export interface KittyMutationArgs {
  name: string;
}

export interface AddUserMutationArgs {
  firstName: string;
  lastName: string;
}

export interface addCompanyResponse {
  ok: boolean | null;
  error: string | null;
  company: Company | null;
}

export interface kittyResponse {
  ok: boolean;
  kitty: string | null;
  text: string | null;
  error: string | null;
}

export interface addUserResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Schedule {
  name: string;
}

export interface Statement {
  activity: Array<Activity>;
}
