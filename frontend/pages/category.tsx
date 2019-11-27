import React from 'react'
import { Categories } from '../components/Categories'
import { Layout } from '../components/Layout'
import { withApollo } from '../lib/apollo'

export default withApollo((props: any) => (
  <Layout title='Category' props={props}>
    <Categories />
  </Layout>
))
