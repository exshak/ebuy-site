import React from 'react'
import { CreatePost } from '../components/CreatePost'
import { Layout } from '../components/Layout'
import { withApollo } from '../lib/apollo'

export default withApollo((props: any) => (
  <Layout title='Create Post' props={props}>
    <CreatePost id={props.url.query.id} />
  </Layout>
))
