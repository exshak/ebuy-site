import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout'
import { Signup } from '../components/Signup'
import { withApollo } from '../lib/apollo'

export default withApollo((props: any) => (
  <Layout title='Signup' props={props}>
    <Signup />
    <hr />
    Already have an account?{' '}
    <Link href='/signin'>
      <a>Sign in</a>
    </Link>
  </Layout>
))
