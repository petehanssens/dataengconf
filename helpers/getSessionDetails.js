import conferenceData from '../data/2022/allData.json'

function FetchSpeakerDetails(speakerId) {
  return conferenceData.speakers.filter(obj => {
    return obj.id == speakerId
  })[0]
}

export default function getSessionDetails(sessionId) {
  
  let newData = conferenceData.sessions.map((e) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const simpleOptions = {  year: 'numeric', month: 'numeric', day: 'numeric', };
    const newDate = new Date(e.startsAt).toLocaleDateString("en-AU", options)
    const simpleDate = new Date(e.startsAt).toLocaleDateString("en-AU", simpleOptions)
    const [day, month, year] = new Date(e.startsAt).toLocaleDateString('en-AU').split('/');
    const result = [year, month, day].join('-');
    e.goodDate = result
    e.prettyDate = newDate
    e.simpleDate = simpleDate
    if (result == "2022-09-27") {
      e.city = "Melbourne";
    } else if (result == "2022-09-29") {
      e.city = "Sydney"
    } else {
      e.city = "Unknown"
    }
    e.date = new Date(e.startsAt).toLocaleDateString('en-AU')
    e.speakerObject = []
    e.speakers.map((s) => {
      const details = FetchSpeakerDetails(s)
      e.speakerObject.push(details)
    })
    return e
  })
  
  return newData.filter(obj => {
    return obj.id == sessionId
  })

}