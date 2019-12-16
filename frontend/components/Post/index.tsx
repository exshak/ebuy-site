import Link from 'next/link'
import React from 'react'
import { PostStyle, PriceTag, Title } from './styles'

type Props = {
  post?: any
}

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <PostStyle>
      {/* {post.image && <img src={post.image} alt={post.title} />} */}
      {<img src='https://i.redd.it/ehkbm5g5jar21.jpg' alt={post.title} />}
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
      <PriceTag>{'$' + post.price}</PriceTag>
    </PostStyle>
  )
}
