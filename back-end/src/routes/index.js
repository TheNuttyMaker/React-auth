import { testRoute } from './testRoute';
import { config } from 'dotenv';

config();
console.log(process.env.DB_URI);

export const routes = [
    testRoute,
];
