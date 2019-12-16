import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    black: '#3a3a3a',
    white: '#ededed'
  }
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #f7f7f7;
    color: ${props => props.theme.colors.black};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
  }
  main {
    margin-top: 50px;
  }
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`
