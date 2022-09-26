import gql from "graphql-tag";

const getUserInfo = gql`
  query getUserInfo {
    getUserInfo {
      user {
        email
        first_name
        last_name
        bio
        company_name
        linkedin
        preferred_meetup
        country
      }
    }
  }
`;

export default getUserInfo;
