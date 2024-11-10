import { Pool } from 'pg';

export const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT
})

export async function basicQuery(query: string){
	return await pool.query(query)
      .then(res  => res.rows)
}