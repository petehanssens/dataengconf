import conferenceData from '../data/2022/allData.json'

function FetchSessionDetails(id) {
  return conferenceData.sessions.filter(obj => {
    return obj.id == id
  })[0]
}

function addCity(date) {
  let city = ""
  if (date == "2022-09-27") {
    city = "Melbourne";
  } else if (date == "2022-09-29") {
    city = "Sydney"
  } else {
    city = "Unknown"
  }
  return city
}

export default function getConfDetails() {  
  conferenceData.speakers.map((e) => {
    e.sessionObject = []
    e.sessions.map((s) => {
      const details = FetchSessionDetails(s)
      e.sessionObject = details
    })
    const [day, month, year] = new Date(e.sessionObject.startsAt).toLocaleDateString('en-AU').split('/');
    const result = [year, month, day].join('-');
    e.simpleDate = result
    e.city = addCity(result)
  })

  // console.log('conferenceData: ',conferenceData)

  const groupedSpeakers = Object.entries(
    // What you have done
    conferenceData.speakers.reduce((acc, { id, fullName, tagLine, profilePicture, simpleDate, city, sessionObject }) => {
      // Group initialization
      if (!acc[simpleDate]) {
        acc[simpleDate] = [];
      }
      
      // Grouping
      // FIX: only pushing the object that contains id and value
      acc[simpleDate].push({ id, fullName, tagLine, profilePicture, simpleDate, city });
  
      return acc;
    }, {})
  ).map(([simpleDate, speakers, city]) => ({ simpleDate, speakers, city }))

  return groupedSpeakers;

}