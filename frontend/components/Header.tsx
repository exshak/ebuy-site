import React from 'react'
import styled from 'styled-components'
import { Nav } from './Nav'
import { Search } from './Search'

export const Header = () => (
  <StyledHeader>
    <div id='header' className='bar'>
      <Nav />
    </div>
    <div className='sub-bar'>
      <Search />
    </div>
  </StyledHeader>
)

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid '#393939';
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid '#E1E1E1';
    text-align: center;
    margin-bottom: 60px;
  }
`
