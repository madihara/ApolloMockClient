import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  background: white;
  width: 100%;
  max-width: 100vw;
  height: 100px;
  border-bottom: 1px solid #DEE2E8;
  padding: 2rem 1rem 0rem;
`

const FlexRow = styled.div`
  max-width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
`


const HorizontalMenu = () => {
  return(
    <Menu>
      <FlexRow>
        
        <h3>Madison Haradine 12345345</h3>
        <button>New Graph</button>
        
      </FlexRow>
      </Menu>
  )
}

export default HorizontalMenu