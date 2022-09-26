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
        country
        user_type
      }
    }
  }
`;

export default getUserInfo;
