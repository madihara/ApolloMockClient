import React from 'react'
import styled from 'styled-components'

const Responsive = styled.div`
  height: 100%;
  width: 75%;
  min-height: 100px;
  background: white;
  color: black;
  margin: 3rem;
  border: 1px solid #DEE2E8;
  border-radius: 10px;
  display: flex;
`

const ResponsiveDiv = () => {
  return(
    <Responsive>      
      
      I'm going to be responsive one day 

    </Responsive>

  
  )
}

export default ResponsiveDiv