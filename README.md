Install all dependencies
npm install

Start Project 

Bakcend
npm run backend

Frontend
npm run frontned


Then create a databaase table in postgres

Connect to database table to your app 

Then run below this commad

Sequelize Command

1st  - 
npx sequelize-cli init

project/
├── config/
│   └── config.json
├── migrations/
├── models/
├── seeders/
└── ...

Then change config.json file

{
  "development": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  },
  "test": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}

if it is not working create a js sequelize-config.js file 

import dotenv from 'dotenv'

//Load enviroment varibales form .env file 

dotenv.config()


export default {
    development: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
      },
      test: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
      },
      production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
      },
}

Generate Migrations file 
npx sequelize-cli migration:generate --name create-raju-table //Do something with your migrations file

and then


npx sequelize-cli db:migrate --config config/sequelize-config.js // Execeute this commad to migrate to database

Roll back

npx sequelize-cli db:migrate:undo --config config/sequelize-config.js




