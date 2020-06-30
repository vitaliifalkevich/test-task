import { gql } from 'apollo-boost'

export const SIGN_UP = gql`
  mutation  SignupInput (
    $userName: String!, 
    $email: String!, 
    $password: String!, 
    $country: String!,
    $gender: Gender!
    ) {
  signup(input: {
    name: $userName,
    email: $email,
    password: $password,
    country: $country,
    gender: $gender}) {
    name,
    email,
    country,
    gender
  }
}
`
