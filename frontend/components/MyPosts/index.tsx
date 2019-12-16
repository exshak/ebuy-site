import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'
import { Date, Image, PostList, Price, StyledList, Title } from './styles'

const MY_POSTS = gql`
  query MY_POSTS($id: ID!) {
    myposts(id: $id) {
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

export const MyPosts = ({ user }: any) => {
  const { loading, error, data } = useQuery(MY_POSTS, {
    variables: { id: user.me.id }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <PostList>
      <ul>
        {data.myposts.map((post: any) => (
          <StyledList key={post.id}>
            <Image>
              <Link
                href={{
                  pathname: '/post',
                  query: { id: post.id }
                }}
              >
                <img
                  src='https://i.redd.it/ehkbm5g5jar21.jpg'
                  alt={post.title}
                />
              </Link>
            </Image>
            <Title>{post.title}</Title>
            <Price>{'$' + post.price}</Price>
            <Date>{post.createdAt}</Date>
            <Link
              href={{
                pathname: '/update',
                query: { id: post.id }
              }}
            >
              <a>Edit</a>
            </Link>
            <Link
              href={{
                pathname: '/update',
                query: { id: post.id }
              }}
            >
              <a>Delete</a>
            </Link>
          </StyledList>
        ))}
      </ul>
    </PostList>
  )
}
