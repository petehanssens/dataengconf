import gql from 'graphql-tag'

const getUserInfo = gql`
query getUserInfo  {
  getUserInfo {
    pk
    sk 
    user {
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

export default getUserInfo;