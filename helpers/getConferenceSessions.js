import conferenceData from '../data/2022/allData.json'

function FetchSpeakerDetails(id) {
  return conferenceData.speakers.filter(obj => {
    return obj.id == id
  })[0]
}

export default function getConferenceSessionsDetails() {
  
  conferenceData.sessions.map((e) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const simpleOptions = {  year: 'numeric', month: 'numeric', day: 'numeric', };
    const newDate = new Date(e.startsAt).toLocaleDateString("en-AU", options)
    const simpleDate = new Date(e.startsAt).toLocaleDateString("en-AU", simpleOptions)
    const [day, month, year] = new Date(e.startsAt).toLocaleDateString().split('/');
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
    e.date = new Date(e.startsAt).toLocaleDateString()
    e.speakerObject = []
    e.speakers.map((s) => {
      const details = FetchSpeakerDetails(s)
      e.speakerObject.push(details)
    })
  })

  const groupedSessions = Object.entries(
    // What you have done
    conferenceData.sessions.reduce((acc, { id, title, city, description, startsAt, endsAt, isServiceSession, goodDate, speakerObject }) => {
      // Group initialization
      if (!acc[goodDate]) {
        acc[goodDate] = [];
      }
      
      // Grouping
      // FIX: only pushing the object that contains id and value
      acc[goodDate].push({ id, title, city, description, startsAt, endsAt, isServiceSession, speakerObject });
  
      return acc;
    }, {})
  ).map(([goodDate, sessions]) => ({ goodDate, sessions }));

  return groupedSessions;


}