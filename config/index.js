require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV  !== 'production',
    port: process.env.PORT,
    dbUser:process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbname: process.env.DB_NAME
}