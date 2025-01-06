//Insert Data from console


/*
import readline from 'readline';
; // Adjust the path to your model file
import defineModel from './Model/Demo.js';
import {Sequelize } from 'sequelize'


 const sequelize = new Sequelize("postgresql://postgres:postgres@localhost:5432/Demo",  {
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

const Demo = defineModel(sequelize)

// Create a readline interface for terminal input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout, 
});

// Function to insert data into the Demo table
const insertData = async (name) => {
  try {
    const demo = await Demo.create({ name });
    console.log(`Data inserted: ${JSON.stringify(demo)}`);
  } catch (err) {
    console.error('Error inserting data:', err.message);
  }
};

// Function to fetch all data from the Demo table
const fetchData = async () => {
  try {
    const data = await Demo.findAll();
    if (data.length > 0) {
      console.log('Data retrieved:');
      data.forEach((item) => console.log(`ID: ${item.id}, Name: ${item.name}`));
    } else {
      console.log('No data found.');
    }
  } catch (err) {
    console.error('Error fetching data:', err.message);
  }
};

// Main menu for terminal interaction
const mainMenu = () => {
  rl.question('Choose an action (1: Insert Data, 2: Fetch Data, 3: Exit): ', async (choice) => {
    switch (choice.trim()) {
      case '1':
        rl.question('Enter a name to insert: ', async (name) => {
          await insertData(name);
          mainMenu(); // Return to main menu after action
        });
        break;
      case '2':
        await fetchData();
        mainMenu(); // Return to main menu after action
        break;
      case '3':
        console.log('Goodbye!');
        rl.close(); // Close the readline interface
        break;
      default:
        console.log('Invalid choice. Please try again.');
        mainMenu(); // Prompt again for valid input
    }
  });
};

// Start the application
mainMenu();
*/
