import styled from 'styled-components'

export const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  max-width: 1000px;
  margin: 0 auto;
`

export const StyledList = styled.li`
  display: flex;
`

export const Image = styled.div`
  img {
    cursor: pointer;
    width: 200px;
  }
`

export const Title = styled.h2`
  margin-left: 30px;
  width: 300px;
`

export const Price = styled.h2`
  width: 100px;
`

export const Date = styled.h2`
  width: 100px;
`
