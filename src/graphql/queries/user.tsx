import { gql } from 'apollo-boost'

export const GET_USER = gql`
 {
  user(email: "user3@gmail.com"){
    email
  }
}
`
