import gql from "graphql-tag";

const mutation = gql`
  mutation (
    $email: String!
    $first_name: String
    $last_name: String
    $bio: String
    $company_name: String
    $linkedin: String
    $preferred_meetup: String
    $country: String
  ) {
    createInitialUser(
      email: $email
      first_name: $first_name
      last_name: $last_name
      bio: $bio
      company_name: $company_name
      linkedin: $linkedin
      preferred_meetup: $preferred_meetup
      country: $country
    ) {
      email
    }
  }
`;
export default mutation;
