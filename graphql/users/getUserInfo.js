import gql from "graphql-tag";

const getUserInfo = gql`
  query getUserInfo {
    getUserInfo {
      user {
        email
        country
        first_name
        last_name
        linkedin
        preferred_meetup
      }
    }
  }
`;

export default getUserInfo;
