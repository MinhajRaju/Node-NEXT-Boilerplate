import dotenv from 'dotenv'


//Load enviroment varibales form .env file 


dotenv.config({  path: '../.env'  });


export default {
 
    development: {
      username: String(process.env.DB_USER), // From .env file
      password: String(process.env.DB_PASSWORD), // From .env file
      database: String(process.env.DB_NAME), // From .env file
      host: 'localhost', // Host for your database
      port: 5432, // Default PostgreSQL port
      dialect: 'postgres', // Database dialect
      logging: console.log, // Enable logging in development
    },
    test: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: `${process.env.DB_NAME}_test`, // Use a separate test database
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
      logging: false, // Disable logging in test environment
    },
    production: {
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
      logging: false, // Disable logging in production
    },
  
}