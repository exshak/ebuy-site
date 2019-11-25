import React from 'react'
import { CreatePost } from '../components/CreatePost'
import { Layout } from '../components/Layout'
import { withApollo } from '../lib/apollo'

export default withApollo(() => (
  <Layout>
    <CreatePost />
  </Layout>
))
