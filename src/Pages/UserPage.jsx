import React from 'react'
import styled from 'styled-components'

import ResponsiveDiv from '../components/containers/ResponsiveDiv'

const Container = styled.div`
  margin-left: 300px;
`

const UserPage= () => {
  return(
    <Container>
    <ResponsiveDiv />
    </Container>
  )
}

export default UserPage