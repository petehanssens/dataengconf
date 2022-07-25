import gql from 'graphql-tag'

const searchMeetups = gql`
query MyQuery($queryString: String = "") {
  searchMeetups(filter: {title: { match: $queryString }}) {
    title
  }
}
`
export default searchMeetups;