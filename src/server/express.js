import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { resolve } from 'path'
dotenv.config()

const app = express()
app.use(express.static(resolve(__dirname, '../public')))
app.use(cors())

export { app }
