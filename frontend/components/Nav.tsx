import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

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
      <NavStyles>
        <Link href='/'>
          <a style={{ textDecoration: `none` }}>Home</a>
        </Link>
        <Link href='/posts'>
          <a style={{ textDecoration: `none` }}>Posts</a>
        </Link>
        {!data && (
          <>
            <Link href='/signin'>
              <a style={{ textDecoration: `none` }}>Login</a>
            </Link>
            <Link href='/signup'>
              <a style={{ textDecoration: `none` }}>Register</a>
            </Link>
            <Link href='/forgot-password'>
              <a style={{ textDecoration: `none` }}>Forgot Password</a>
            </Link>
          </>
        )}
        {data && (
          <span>
            <Link href='/'>
              <a style={{ textDecoration: `none` }}>Logout</a>
            </Link>
          </span>
        )}
      </NavStyles>
    </nav>
  )
}

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: '#393939';
    font-weight: 800;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: '#E1E1E1';
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid '#E1E1E1';
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`
