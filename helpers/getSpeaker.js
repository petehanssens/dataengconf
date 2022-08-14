import { speakers } from '../data/2022/allData.json'

export default function getSpeaker(id) {
  
  return speakers.filter(obj => {
    return obj.id == id
  })

}