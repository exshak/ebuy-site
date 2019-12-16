import gql from 'graphql-tag'

export const ME_QUERY = gql`
  query getUser {
    me {
      id
      name
    }
  }
`
