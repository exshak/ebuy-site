import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'
import { StyledButton } from '../Common/Button'
import { StyledList, StyledLogo, StyledNav } from './styles'

const ME_QUERY = gql`
  query getUser {
    me {
      id
      name
    }
  }
`

export const Nav = () => {
  const { data } = useQuery(ME_QUERY)

  return (
    <StyledNav>
      <StyledLogo>
        <Link href='/'>Home</Link>
      </StyledLogo>
      <StyledList>
        {!data ? (
          <>
            <Link href='/signin'>Login</Link>
            {' or '}
            <Link href='/signup'>Register</Link>
            {/* <Link href='/forgot-password'>Forgot Password</Link> */}
          </>
        ) : (
          <Link href='/'>Logout</Link>
        )}
        <StyledButton type='submit'>
          <Link href='/category'>Post ad</Link>
        </StyledButton>
      </StyledList>
    </StyledNav>
  )
}
