import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Link from 'next/link'
import React from 'react'
import { StyledCategories } from './styles'

const ALL_CAT = gql`
  query ALL_CAT {
    categories {
      id
      name
      subcategories {
        id
        name
      }
    }
  }
`

export const Categories: any = () => {
  const { loading, error, data } = useQuery(ALL_CAT)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  // if (error) return <Error />;
  // if (loading || !data) return <Fetching />;

  return (
    <StyledCategories>
      {data.categories.map((cat: any) => (
        <div key={cat.id}>
          <h1>{cat.name}</h1>
          <ul>
            {cat.subcategories.map((sub: any) => (
              <li key={sub.id}>
                <Link
                  href={{
                    pathname: '/create',
                    query: { id: sub.id }
                  }}
                >
                  <a>{sub.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </StyledCategories>
  )
  //     <option value=''>Select a Category</option>
  //     {data.subcategories.map((cat: any) => (
  //       <option key={cat.id} value={cat.id}>
  //         {cat.name}
  //       </option>
  //     ))}
}
