import Head from 'next/head'
import React from 'react'

type Props = {
  title?: string
}

export const Meta: React.FunctionComponent<Props> = ({ title }) => (
  <Head>
    <title>{title} | Site</title>
    <meta charSet='utf-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
  </Head>
)
