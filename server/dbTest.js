import pool from "./src/database";

(async () => {
    try {
        const result = await pool.query('SELECT NOW()');
        console.log('Connected to DB:', result.rows[0]);
    } catch (error) {
        console.error('Database connection error:', error);
    }
})();
