import React from 'react'

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
      <ResponsiveDiv style={{overflowY: 'scroll'}} />
    </div>
  )
}

export default UserPage