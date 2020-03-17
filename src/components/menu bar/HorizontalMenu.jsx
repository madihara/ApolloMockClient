import React from 'react'
import styled from 'styled-components'

import Button from '../Button'

const Menu = styled.div`
  background: white;
  width: 100%;
  max-width: 100vw;
  border-bottom: 1px solid #DEE2E8;
  padding: 0.2rem;
`

const FlexRow = styled.div`
  max-width: 95%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  padding: 0 2rem;

  h3{
    font-size: 1.7rem;
  }


`
const Tab = styled.a`
  font-size: 0.9rem;
  padding: 0.2rem 2rem 0.6rem 0;
  color: #848484;
  text-decoration:none;

  &:hover{
    cursor: pointer;
    color: black;
  }
  
`


const HorizontalMenu = () => {
  return(
    <Menu>
      <FlexRow style={{justifyContent: 'space-between'}}>
        
        <h3>Madison Haradine</h3>
        <Button>New Graph</Button>
        
      </FlexRow>
      <FlexRow style={{justifyContent: 'flex-start'}}>
        <Tab href="/graphs">Graphs</Tab>
        <Tab href="/member">Members</Tab>
        <Tab href="settings">Settings</Tab>
      </FlexRow>
      </Menu>
  )
}

export default HorizontalMenu