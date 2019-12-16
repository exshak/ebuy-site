import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'
import { Post } from '../Post'
import { PostList } from './styles'

const ALL_POSTS = gql`
  query ALL_POSTS {
    posts {
      id
      title
      description
      image
      imageLarge
      location
      price
      owner {
        name
      }
      subcategory {
        name
      }
      createdAt
      updatedAt
      published
    }
  }
`

export const Posts = ({ user }: any) => {
  const { loading, error, data } = useQuery(ALL_POSTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  console.log(user) // FIXME: remove

  return (
    <PostList>
      {data.posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </PostList>
  )
}
