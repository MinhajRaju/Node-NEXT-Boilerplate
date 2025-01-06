import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../Db/config.js'; // Adjust the path as needed

const sequelize = db();


//For console.js model configure when insert data from console just uncommect this model 
/*

const defineModel = (sequelize)  =>{

    const Demo = sequelize.define(
        'Demo',
        {
          id: {
            type: DataTypes.INTEGER, // Integer type for the id
            allowNull: false,        // id cannot be null
            autoIncrement: true,     // Automatically increment the id value
            primaryKey: true,        // The id is the primary key of the table
          },
          name: {
            type: DataTypes.STRING,  // String type for the name
            allowNull: true,         // Name can be null
          },
        },
        {
          tableName: 'Demo',         // Explicitly specify the table name
          timestamps: true,          // Adds createdAt and updatedAt fields
        }
      );
      return Demo

}



export default defineModel;

*/

const Demo = sequelize.define(
    'Demo',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Default current timestamp
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Default current timestamp
      },
    },
    {
      tableName: 'Demo', // Explicitly set the table name
      timestamps: true, // Enables automatic handling of createdAt and updatedAt
    }
  );
export default Demo




