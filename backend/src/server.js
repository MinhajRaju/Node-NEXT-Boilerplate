//Db and Server

import { startServer } from './Server/config.js'
import { db } from './Db/config.js'


//Db conneciton 

db()

//Server connection

startServer()

