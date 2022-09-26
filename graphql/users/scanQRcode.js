import gql from "graphql-tag";

const mutation = gql`
  mutation (
    $qr_code: String
  ) {
    scanQRCode(
      qr_code: $qr_code
    )
   {
    qr_code
   }
}
`;

export default mutation;
