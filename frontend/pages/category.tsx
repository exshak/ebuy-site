import React from 'react'
import { Categories } from '../components/Categories'
import { Layout } from '../components/Layout'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'
import redirect from '../lib/redirect'

const CategoryPage = (props: any) => (
  <Layout title='Category' props={props}>
    <Categories />
  </Layout>
)

CategoryPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  if (!loggedInUser.me) {
    // If not signed in, send them somewhere more useful
    redirect(context, '/signin')
  }
}

export default withApollo(CategoryPage)
