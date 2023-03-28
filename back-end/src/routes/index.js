import { testRoute } from './testRoute';
import { config } from 'dotenv';
import { signUpRoute } from './signUpRoutes';
import { LoginRoute } from './loginRoute';

config();
console.log(process.env.DB_URI);

export const routes = [
    testRoute,
    signUpRoute,
    LoginRoute
];
