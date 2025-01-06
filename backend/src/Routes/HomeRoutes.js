import express from 'express'
import { HomePage } from '../Controller/HomeController.js'

const router = express.Router()

router.get('/' , HomePage)

export default router