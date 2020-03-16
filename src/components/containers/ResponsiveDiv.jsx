import React from 'react'
import styled from 'styled-components'

const Responsive = styled.div`
  width: 95%;
  max-width: 100vw;
  min-height: 100px;
  background: white;
  color: black;
  border: 1px solid #DEE2E8;
  border-radius: 10px;
  display: flex;
  margin: 2rem;
`

const ResponsiveDiv = () => {
  return(
    <Responsive>      
      
      I'm going to be responsive one day 

    </Responsive>

  
  )
}

export default ResponsiveDiv