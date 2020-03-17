import React from 'react'
import styled from 'styled-components'

import Button from '../Button'

const Title = styled.h3`
  font-size: 1rem;
  padding: 0;
  margin: 2rem 3rem;
  font-weight: normal;
`

const Responsive = styled.div`
  max-width: 100vw;
  min-height: 100px;
  background: white;
  color: black;
  border: 1px solid #DEE2E8;
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 3rem;
  padding: 0 2rem;
  

  h4{
    font-weight: normal;
    line-height: 0.5rem;
  }
  h5{
    font-weight: lighter;
  }
`



 const ResponsiveDiv = () => {
  return(
    <div style={{overflowY:'auto'}}>
      <Title>Not Congifured</Title>
      <Responsive>      
        <div>
        <h4>ohshutes</h4> 
        <h5>Unconfigured</h5>
        </div>
        <Button style={{backgroundColor: 'green'}}>Finish Setup</Button>
      </Responsive>
    </div>
  
  )
}

export default ResponsiveDiv