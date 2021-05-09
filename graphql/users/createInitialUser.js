import gql from 'graphql-tag'

const mutation = gql`
mutation (
  $email: String!,
  $first_name: String,
  $last_name: String,
  $mobile: String,
  $employee_id: String,
  $position_description: String,
  $type: String,
  $cost_type: String,
  $status: String
) {
createInitialUser (
  email: $email,
  first_name: $first_name,
  last_name: $last_name,
  mobile: $mobile,
  employee_id: $employee_id,
  position_description: $position_description,
  type: $type,
  cost_type: $cost_type,
  status: $status
) {
  status
}
}
`
export default mutation;