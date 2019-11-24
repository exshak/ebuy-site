import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React, { useState } from 'react'

const SEARCH = gql`
  query SEARCH($filter: String) {
    posts(
      where: {
        OR: [{ title_contains: $filter }, { description_contains: $filter }]
      }
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
  const { data } = useQuery(SEARCH, {
    variables: filter
  })
  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error: {error.message}</p>
  // console.log(data)
  const executeSearch = async () => {
    // const result = await props.client.query({
    //   query: SEARCH,
    //   variables: filter
    // })
    console.log(data.posts)
    setPosts(data.posts)
  }

  return (
    <div>
      <div>
        Search: <input type='text' onChange={e => setFilter(e.target.value)} />
        <button onClick={() => executeSearch()}>Search</button>
      </div>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}
