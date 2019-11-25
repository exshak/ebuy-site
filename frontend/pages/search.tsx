import React from 'react'
import { Layout } from '../components/Layout'
import { withApollo } from '../lib/apollo'

export default withApollo(() => (
  <Layout>
    <span></span>
  </Layout>
))
