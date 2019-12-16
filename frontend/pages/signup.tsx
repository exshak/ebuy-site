import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout'
import { Signup } from '../components/Signup'
import { withApollo } from '../lib/apollo'
import checkLoggedIn from '../lib/checkLoggedIn'
import redirect from '../lib/redirect'

const SignupPage = (props: any) => (
  <Layout title='Signup' props={props}>
    <Signup />
    Already have an account?{' '}
    <Link href='/signin'>
      <a>Sign in</a>
    </Link>
  </Layout>
)

SignupPage.getInitialProps = async (context: any) => {
  const { loggedInUser } = await checkLoggedIn(context.apolloClient)

  if (loggedInUser.me) {
    redirect(context, '/')
  }
  return {}
}

export default withApollo(SignupPage)
