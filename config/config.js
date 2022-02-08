require('dotenv').config();
module.exports = {
    mainUri: '/api',
    basePort: process.env.BASE_PORT || 4001,
    username: process.env.USERNAME || '',
    password: process.env.PASSWORD || '',
    database: process.env.DB_NAME || 'postgres',
    host: process.env.HOST || 'localhost',
    dialect: 'postgres',
    // token_key: process.env.TOKEN_KEY,
};