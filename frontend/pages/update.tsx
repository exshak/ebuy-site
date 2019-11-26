import React from 'react'
import { Layout } from '../components/Layout'
import { UpdatePost } from '../components/UpdatePost'
import { withApollo } from '../lib/apollo'

export default withApollo((props: any) => (
  <Layout>
    <UpdatePost id={props.url.query.id} />
  </Layout>
))
