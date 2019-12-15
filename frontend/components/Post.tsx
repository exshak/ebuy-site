import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

type Props = {
  post?: any
}

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <PostStyle>
      {post.image && <img src={post.image} alt={post.title} />}
      <Title>
        <Link
          href={{
            pathname: '/post',
            query: { id: post.id }
          }}
        >
          <a>{post.title}</a>
        </Link>
      </Title>
      <PriceTag>{post.price}</PriceTag>
      <p>{post.description}</p>
    </PostStyle>
  )
}

const PostStyle = styled.div`
  background: white;
  border: 1px solid '#EDEDED';
  box-shadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)';
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 400px;
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
    border-top: 1px solid '0 12px 24px 0 rgba(0, 0, 0, 0.09)';
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: '0 12px 24px 0 rgba(0, 0, 0, 0.09)';
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
  }
`

const PriceTag = styled.span`
  background: '#FF0000';
  transform: rotate(3deg);
  color: white;
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 20px;
  right: -3px;
`

const Title = styled.h3`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: '#FF0000';
    display: inline;
    line-height: 1.3;
    font-size: 4rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`
