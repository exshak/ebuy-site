import React from 'react'
import { Layout } from '../components/Layout'
import { withApollo } from '../lib/apollo'

export default withApollo((props: any) => (
  <Layout title='Create Post' props={props}>
    <span></span>
  </Layout>
))
