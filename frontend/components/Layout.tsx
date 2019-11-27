import * as React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Meta } from './Meta'

type Props = {
  title?: string
  props?: any
}

export const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'Title'
}) => {
  return (
    <>
      <Meta title={title} />
      <Header />
      <main id='content'>{children}</main>
      <Footer />
    </>
  )
}
