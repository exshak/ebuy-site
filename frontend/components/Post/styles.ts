import styled from 'styled-components'

export const PostStyle = styled.div`
  background: white;
  border: 1px solid #ededed;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
  position: relative;
  display: flex;
  flex-direction: column;
  width: 240px;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  p {
    font-size: 12px;
    line-height: 2;
    font-weight: 300;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`

export const PriceTag = styled.span`
  font-weight: 600;
  padding: 5px;
  /* line-height: 1; */
  font-size: 1rem;
  /* display: inline-block; */
`

export const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    display: inline;
    line-height: 1.3;
    font-size: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`
