require('dotenv').config()

const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === 'production'

// const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const CarlieStringYouUp = `postgres://postgres:postgres@localhost/biblio`

export const pool = new Pool({
  // connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  // connectionString: process.env.ConnectionString,
  connectionString: CarlieStringYouUp,
  ssl: false
  // ssl: isProduction,
})