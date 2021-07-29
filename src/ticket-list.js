import ticket from './ticket'

let lastNumber = 0
let slopes = []
let assigned = []

export function nextNumber () {
  lastNumber++
  return lastNumber
}

export function last13 () {
  return assigned.slice(0, 13)
}

export function newTicket () {
  const newTicket = ticket(nextNumber())
  slopes = [...slopes, newTicket]
  return newTicket
}

export function assignedTicket (agente, desktop) {
  if (slopes.length === 0) {
    return null
  }
  const nextTicket = slopes.shift()
  nextTicket.agente = agente
  nextTicket.desktop = desktop
  assigned = [nextTicket, ...assigned]
  return nextTicket
}
