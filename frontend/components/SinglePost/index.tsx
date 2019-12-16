import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'
import { ME_QUERY } from '../Common/Query'
import { SinglePostStyle } from './styles'

export const SINGLE_POST = gql`
  query SINGLE_POST($id: ID!) {
    post(id: $id) {
      id
      title
      description
      price
      owner {
        id
      }
      # imageLarge
    }
  }
`

type Props = {
  id?: string
}

export const SinglePost: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery(SINGLE_POST, {
    variables: { id }
  })
  const user = useQuery(ME_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <SinglePostStyle>
      {/* {data.imageLarge && <img src={data.imageLarge} alt={data.title} />} */}
      <div className='details'>
        <h2>{data.post.title}</h2>
        <h4>{'$' + data.post.price}</h4>
        {
          <img
            src='https://i.redd.it/ehkbm5g5jar21.jpg'
            alt={data.post.title}
          />
        }
        <p>{data.post.description}</p>
      </div>
      {user.data && user.data.me.id === data.post.owner.id && (
        <Link
          href={{
            pathname: '/update',
            query: { id: data.post.id }
          }}
        >
          <a>Edit</a>
        </Link>
      )}
    </SinglePostStyle>
  )
}
