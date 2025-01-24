import pkg from 'pg';
const { Pool } = pkg;
import dotenv from "dotenv"
dotenv.config()


// Create a new pool instance to connect to PostgreSQL
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

export default pool;