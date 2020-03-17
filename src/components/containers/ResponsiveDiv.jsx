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
  min-height: 80px;
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
    line-height: 0;
    margin-bottom: 10px;
  }
  h5{
    font-weight: lighter;
    line-height: 0;
  }
`



 const ResponsiveDiv = () => {
  return(
    <div>
      <Title>Not Congifured</Title>
      <Responsive>      
        <div style={{display: 'flex', flexDirection:'column', justifyConent: 'center'}}>
        <h4>ohshutes</h4> 
        <h5>Unconfigured</h5>
        </div>
        <Button theme='secondary'>Finish Setup</Button>
      </Responsive>
    </div>
  
  )
}

export default ResponsiveDiv