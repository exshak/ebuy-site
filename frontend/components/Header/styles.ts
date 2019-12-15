import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: white;
  box-shadow: 0 3px 3px -3px black;
  padding: 1rem 2rem;
  /* .bar {
    border-bottom: 10px solid '#393939';
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  } */
  /* .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid '#E1E1E1';
    text-align: center;
    margin-bottom: 60px;
  } */
`

export const StyledNav = styled.div`
  align-items: center;
  display: flex;
  /* justify-self: end; */
  /* font-size: 2rem; */
  /* button, */
  li {
    /* padding: 1rem 1rem; */
    /* display: flex; */
    /* align-items: center; */
    /* position: relative; */
    /* text-transform: uppercase; */
    /* font-weight: 700; */
    /* font-size: 1em; */
    /* background: none; */
    /* border: 0; */
    /* cursor: pointer; */
    /* color: '#393939'; */
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: '#E1E1E1';
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid '#E1E1E1';
    /* width: 100%; */
    /* justify-content: center; */
    /* font-size: 1.5rem; */
  }
`

export const StyledLogo = styled.div`
  width: 10%;
`

export const StyledList = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  a {
    font-weight: 700;
    padding: 0 5px;
  }
`
