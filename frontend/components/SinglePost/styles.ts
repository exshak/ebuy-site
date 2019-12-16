import styled from 'styled-components'

export const SinglePostStyle = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  display: grid;
  grid-auto-columns: 2fr 1fr;
  grid-auto-flow: column;
  /* min-height: 800px; */
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
  .details {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    font-size: 2rem;
  }
`
