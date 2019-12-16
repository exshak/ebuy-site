import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout'
import { Signin } from '../components/Signin'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'
import redirect from '../lib/redirect'

const SigninPage = (props: any) => (
  <Layout title='Signin' props={props}>
    <Signin />
    New?{' '}
    <Link href='/signup'>
      <a>Create account</a>
    </Link>
  </Layout>
)

SigninPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  if (loggedInUser.me) {
    redirect(context, '/')
  }
  return {}
}

export default withApollo(SigninPage)
