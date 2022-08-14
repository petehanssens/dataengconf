import { sessions } from '../data/2022/allData.json'

export default function getSession(id) {
  
  return sessions.filter(obj => {
    return obj.id == id
  })

}