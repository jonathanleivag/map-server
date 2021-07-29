import socketio from 'socket.io'
import { active, addMarker, updateMarker } from '../markers'

export default function socketFunction (server) {
  const io = socketio(server)

  io.on('connection', socket => {
    socket.emit('marker-activo', active)
    socket.on('new-marker', marker => {
      addMarker(marker)
      socket.broadcast.emit('new-marker', marker)
    })
    socket.on('update-marker', marker => {
      updateMarker(marker)
      socket.broadcast.emit('update-marker', marker)
    })
  })
}
