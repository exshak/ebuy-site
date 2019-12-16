import React from 'react'
import { Layout } from '../components/Layout'
import { UpdatePost } from '../components/UpdatePost'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'
import redirect from '../lib/redirect'

const UpdatePage = (props: any) => (
  <Layout title='Update Post' props={props}>
    <UpdatePost id={props.url.query.id} />
  </Layout>
)

UpdatePage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  if (!loggedInUser.me) {
    redirect(context, '/')
  }
  return {}
}

export default withApollo(UpdatePage)
