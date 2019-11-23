import Head from 'next/head'
import React from 'react'

export const Meta = ({ title }: any) => (
  <Head>
    <title>{title} | Site</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
)
