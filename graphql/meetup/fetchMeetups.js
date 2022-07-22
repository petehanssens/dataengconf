import gql from 'graphql-tag'

const fetchMeetups = gql`
query fetchMeetups  {
    fetchMeetups { 
      meetup {
        email
        first_name
        last_name
        linkedin
        preferred_meetup
        country
      }
    }
  }
`
export default fetchMeetups;