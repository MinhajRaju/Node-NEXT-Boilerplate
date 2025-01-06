import {Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config({ path: './.env' });



export const db  = () =>{



    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, String(process.env.DB_PASSWORD),  {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: console.log,
    
    })


    sequelize.authenticate()
    .then(()=>{
        console.log('connection established')
    })
    .catch((error)=>{
        console.error("Unable to connection to the database" , error.message)
    })

    return  sequelize


}





