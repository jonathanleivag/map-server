import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { resolve } from 'path'
import { last13 } from '../ticket-list'
dotenv.config()

const app = express()
app.use(express.static(resolve(__dirname, '../public')))
app.use(cors())

app.get('/last13', (_, res) => {
  res.json({
    ok: true,
    last: last13()
  })
})

export { app }
