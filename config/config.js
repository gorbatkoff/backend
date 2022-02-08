// {
//   "development": {
//     "username": "user",
//     "password": "",
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "test": {
//     "username": "user",
//     "password": "",
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   },
//   "production": {
//     "username": "user",
//     "password": "",
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "postgres"
//   }
// }

require('dotenv').config();
module.exports = {
    mainUri: '/api',
    basePort: process.env.BASE_PORT || 4001,
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
    database: process.env.DB_NAME || 'postgres',
    host: process.env.HOST || 'localhost',
    dialect: 'postgres',
};