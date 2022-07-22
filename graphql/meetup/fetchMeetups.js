import gql from 'graphql-tag'

const fetchMeetups = gql`
query MyQuery($city: String = "") {
  fetchMeetupInfo(city: $city) {
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