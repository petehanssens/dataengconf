import gql from "graphql-tag";

const mutation = gql`
  mutation (
    $qr_code: String!
    # $customer_id: String
  ) {
    scanQRcode(
      qr_code: $qr_code
    #   customer_id: $customer_id
    )
  }
`;
export default mutation;
