import gql from 'graphql-tag'

// FIXME: check types
export default (apolloClient: any) =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          # user {
          me {
            id
            name
          }
        }
      `
    })
    // FIXME: check types
    .then(({ data }: any) => {
      return { loggedInUser: data }
    })
    .catch(() => {
      // Fail gracefully
      return { loggedInUser: {} }
    })
