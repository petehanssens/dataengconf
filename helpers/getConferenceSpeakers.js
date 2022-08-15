import conferenceData from '../data/2022/allData.json'

function FetchSessionDetails(id) {
  return conferenceData.sessions.filter(obj => {
    return obj.id == id
  })[0]
}

export default function getConfDetails() {  
  conferenceData.speakers.map((e) => {
    e.sessionObject = []
    e.sessions.map((s) => {
      const details = FetchSessionDetails(s)
      e.sessionObject = details
    })
    const [day, month, year] = new Date(e.sessionObject.startsAt).toLocaleDateString().split('/');
    const result = [year, month, day].join('-');
    e.simpleDate = result
  })

  const groupedSpeakers = Object.entries(
    // What you have done
    conferenceData.speakers.reduce((acc, { id, fullName, tagLine, profilePicture, simpleDate, sessionObject }) => {
      // Group initialization
      if (!acc[simpleDate]) {
        acc[simpleDate] = [];
      }
      
      // Grouping
      // FIX: only pushing the object that contains id and value
      acc[simpleDate].push({ id, fullName, tagLine, profilePicture, simpleDate });
  
      return acc;
    }, {})
  ).map(([simpleDate, speakers]) => ({ simpleDate, speakers }));

  return groupedSpeakers;


}