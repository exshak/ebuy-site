import Link from 'next/link'
import React from 'react'
import { Layout } from '../components/Layout'
import { Signup } from '../components/Signup'
import { withApollo } from '../lib/apollo'

export default withApollo(() => (
  <Layout title='Signup'>
    <Signup />
    <hr />
    Already have an account?{' '}
    <Link href='/signin'>
      <a>Sign in</a>
    </Link>
  </Layout>
))
