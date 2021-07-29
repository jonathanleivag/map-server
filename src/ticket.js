import { v4 as uuidv4 } from 'uuid'

export default function ticket (number) {
  return {
    id: uuidv4(),
    number,
    desktop: null,
    agente: null
  }
}
