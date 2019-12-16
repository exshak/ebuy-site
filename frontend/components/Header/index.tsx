import { useApolloClient, useQuery } from '@apollo/react-hooks'
import cookie from 'cookie'
import Link from 'next/link'
import React from 'react'
import redirect from '../../lib/redirect'
import { StyledButton } from '../Common/Button'
import { ME_QUERY } from '../Common/Query'
import { Search } from '../Search'
import {
  StyledHeader,
  StyledLink,
  StyledList,
  StyledLogo,
  StyledNav
} from './styles'

export const Header = () => {
  const { data } = useQuery(ME_QUERY)
  const apolloClient = useApolloClient()

  const signout = () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    })
    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/signin')
    })
  }

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLogo>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </StyledLogo>
        <StyledList>
          {!data ? (
            <>
              <Link href='/signin'>
                <a>Login</a>
              </Link>
              {' or '}
              <Link href='/signup'>
                <a>Register</a>
              </Link>
              {/* <Link href='/forgot-password'><a>Forgot Password</a></Link> */}
            </>
          ) : (
            <>
              <StyledButton onClick={signout}>Sign out</StyledButton>
              <Link href='/myposts'>
                <a>Dashboard</a>
              </Link>
            </>
          )}
          <StyledLink>
            <Link href='/category'>
              <a>Post ad</a>
            </Link>
          </StyledLink>
        </StyledList>
      </StyledNav>
      <Search />
    </StyledHeader>
  )
}
