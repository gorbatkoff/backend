const Pool = require('pg').Pool; // Poll is class

const pool = new Pool({
    user: 'postgres',
    password: 'qwerty',
    host: "localhost",
    port: 5432,
    database: "tododb"
}); // it's need to create request to dataBase


module.exports = pool;
