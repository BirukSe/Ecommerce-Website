const { Pool } = require('pg');

const pool = new Pool({
    user: 'birukee',
    host: 'localhost',
    database: 'Blog',
    password: 'new_password', // Corrected the spelling from 'passoword' to 'password'
    port: 5432, // Optional: specify the port if it's not the default
});

module.exports = pool;
