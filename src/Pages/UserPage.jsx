import React from 'react'
import styled from 'styled-components'


import HorizontalMenu from '../components/menu bar/HorizontalMenu'
import ResponsiveDiv from '../components/containers/ResponsiveDiv'



const UserPage= () => {
  return(
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      width: '100%',
      }}>
      <HorizontalMenu />
      <ResponsiveDiv />
    </div>
  )
}

export default UserPage