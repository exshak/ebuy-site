import React from 'react'
import { Layout } from '../components/Layout'
import { SinglePost } from '../components/SinglePost'
import { withApollo } from '../lib/apollo'

export default withApollo((props: any) => (
  <Layout>
    <SinglePost id={props.url.query.id} />
  </Layout>
))
