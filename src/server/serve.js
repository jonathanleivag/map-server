import { app } from './express'
import http from 'http'
import io from './socketio'

const server = http.createServer(app)
io(server)

export default function execute () {
  server.listen(process.env.PORT, () => {
    console.log(`connect in ${process.env.PORT}`)
  })
}
