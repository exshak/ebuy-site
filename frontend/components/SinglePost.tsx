import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'
import styled from 'styled-components'

const SINGLE_POST = gql`
  query SINGLE_POST($id: ID!) {
    post(id: $id) {
      id
      title
      description
      # imageLarge
    }
  }
`

type Props = {
  id?: string
}

export const SinglePost: React.FunctionComponent<Props> = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_POST, {
    variables: { id }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <SinglePostStyle>
      {/* {data.imageLarge && <img src={data.imageLarge} alt={data.title} />} */}
      <div className='details'>
        <h2>Post {data.title}</h2>
        <p>{data.description}</p>
      </div>
    </SinglePostStyle>
  )
}

const SinglePostStyle = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)';
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`
