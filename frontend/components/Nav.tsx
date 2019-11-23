import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'

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
    <nav id='navigation'>
      <Link href='/'>
        <a style={{ textDecoration: `none` }}>Home</a>
      </Link>{' '}
      |{' '}
      {!data && (
        <span>
          <Link href='/signin'>
            <a style={{ textDecoration: `none` }}>Login</a>
          </Link>{' '}
          |{' '}
          <Link href='/signup'>
            <a style={{ textDecoration: `none` }}>Register</a>
          </Link>{' '}
          |{' '}
          <Link href='/forgot-password'>
            <a style={{ textDecoration: `none` }}>Forgot Password</a>
          </Link>{' '}
        </span>
      )}
      {data && (
        <span>
          <Link href='/logout'>
            <a style={{ textDecoration: `none` }}>Logout</a>
          </Link>{' '}
        </span>
      )}
    </nav>
  )
}
