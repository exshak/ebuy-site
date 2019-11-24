import { useApolloClient } from '@apollo/react-hooks'
import cookie from 'cookie'
import React from 'react'
import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'
import redirect from '../lib/redirect'

const IndexPage = ({ loggedInUser }: any) => {
  const apolloClient = useApolloClient()

  const signout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    })

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/signin')
    })
  }

  return (
    <Layout>
      {loggedInUser && (
        <div>
          Hello {loggedInUser.me.name}!<br />
          <button onClick={signout}>Sign out</button>
        </div>
      )}
      <Posts />
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
