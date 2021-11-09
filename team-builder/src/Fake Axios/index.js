// Imports
import { v4 as uuid } from 'uuid'

// List of team members with starting member
const initialTeamList = [
  {
    id: uuid(),
    name: 'Zi',
    favColor: 'Purple',
    bday: '03/17/2001',
    personality: 'Kind',
    role: 'Cat',
  },
]

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
