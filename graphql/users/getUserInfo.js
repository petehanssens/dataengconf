import gql from 'graphql-tag'

const getUserInfo = gql`
query getUserInfo  {
  getUserInfo {
    pk
    sk 
    user {
      first_name
      last_name
    }
  }
}
`

export default getUserInfo;