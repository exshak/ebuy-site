import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'
import styled from 'styled-components'
import { Post } from './Post'

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

export const Posts = () => {
  const { loading, error, data } = useQuery(ALL_POSTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <Center>
      <PostList>
        {data.posts.map((post: any) => (
          <Post key={post.id} post={post} />
        ))}
      </PostList>
    </Center>
  )
}

const Center = styled.div`
  text-align: center;
`

const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
`
