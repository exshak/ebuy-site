import React from 'react'
import { Layout } from '../components/Layout'
import { MyPosts } from '../components/MyPosts'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'
import redirect from '../lib/redirect'

const MyPostsPage = ({ loggedInUser, props }: any) => (
  <Layout title='Update Post' props={props}>
    <MyPosts user={loggedInUser} />
  </Layout>
)

MyPostsPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  if (!loggedInUser.me) {
    redirect(context, '/')
  }
  return { loggedInUser }
}

export default withApollo(MyPostsPage)
