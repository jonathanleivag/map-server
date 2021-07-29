import socketio from 'socket.io'
import { newTicket, assignedTicket, last13 } from '../ticket-list'

export default function socketFunction (server) {
  const io = socketio(server)
  io.on('connection', socket => {
    console.log('estoy conectado')
    socket.on('emit-ticket', (_, ticket) => {
      ticket(newTicket())
    })
    socket.on('next-ticket', (user, ticket) => {
      ticket(assignedTicket(user.agente, user.desktop))
      io.emit('last-13', last13())
    })
  })
}
