import React from 'react'
import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'

const IndexPage = ({ loggedInUser, props }: any) => {
  return (
    <Layout title='Home' props={props}>
      <Posts user={loggedInUser} />
    </Layout>
  )
}

IndexPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  if (!loggedInUser.me) {
    // If not signed in, send them somewhere more useful
    // redirect(context, '/signin')
    return {}
  }
  return { loggedInUser }
}

export default withApollo(IndexPage)
