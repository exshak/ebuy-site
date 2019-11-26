import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import React from 'react'

const ALL_CAT = gql`
  query ALL_CAT {
    subcategories {
      id
      name
    }
  }
`

export const Categories: any = () => {
  const { loading, error, data } = useQuery(ALL_CAT)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <>
      <option value=''>Select a Category</option>
      {data.subcategories.map((cat: any) => (
        <option key={cat.id} value={cat.id}>
          {cat.name}
        </option>
      ))}
    </>
  )
}
