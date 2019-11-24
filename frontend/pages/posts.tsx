import React from 'react'
import { Layout } from '../components/Layout'
import { Posts } from '../components/Posts'
import { withApollo } from '../lib/apollo'

export default withApollo(() => {
  return (
    <Layout>
      <Posts />
    </Layout>
  )
})
