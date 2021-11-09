// Imports
import { v4 as uuid } from 'uuid'

// List of team members with starting member
const initialTeamList = [
  {
    id: uuid(),
    name: 'Zi',
    favColor: 'Purple',
    bday: 'blank lmao',
    personality: 'Kind',
    role: 'Cat',
  },
]

// List of Jobs from Miitopia:
/**
 * Warrior
 * Mage
 * Cleric
 * Thief
 * Pop Star
 * Chef
 * Cat
 * Imp
 * Scientist
 * Tank
 * Princess
 * Flower
 * Vampire
 * Elf
 */

// Personalities
/**
 * Kind
 * Energetic
 * Laid back
 * Cool
 * Airheaded
 * Stubborn
 * Cautious
 */

// Color options
/**
 * Red
 * Orange
 * Yellow
 * Light Green
 * Dark Green
 * Light Blue
 * Dark Blue
 * Pink
 * Purple
 * Brown
 * White
 * Black
 */

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamList })
  },
  post(url, { username, email, role }) {
    const newMem = { id: uuid(), username, email, role }
    return Promise.resolve({ status: 200, success: true, data: newMem })
  }
}
