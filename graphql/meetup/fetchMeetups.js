import gql from 'graphql-tag'

const fetchMeetups = gql`
query MyQuery {
  fetchMeetupInfo(city: "Sydney") {
    title
    endtime
    eventurl
    isonline
    starttime
    timezone
  }
}
`
export default fetchMeetups;