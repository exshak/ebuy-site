import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React, { useState } from 'react'

const SEARCH = gql`
  query SEARCH($filter: String) {
    search(
      filter: $filter # where: { OR: [{ title_contains: $filter }, { description_contains: $filter }]}
    ) {
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

export const Search = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState('')
  const { error, data } = useQuery(SEARCH, {
    variables: { filter }
  })
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <div>
        Search: <input type='text' onChange={e => setFilter(e.target.value)} />
        <Link href='/search'>
          <button
            onClick={async () => {
              await setPosts(data.search)
              console.log(data, filter)
            }}
          >
            Search
          </button>
        </Link>
      </div>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
