import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Meta } from './Meta'
import { GlobalStyle, theme } from './styles'

type Props = {
  title?: string
  props?: any
}

export const Layout: React.FC<Props> = ({ children, title = 'Title' }) => {
  return (
    // @ts-ignore FIXME:
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Meta title={title} />
      <Header />
      <main id='content'>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
