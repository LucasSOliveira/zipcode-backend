import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    connectionLimit: process.env.DB_CONNECTION_TIME,
})

export default pool
