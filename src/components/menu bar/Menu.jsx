import React from 'react'


const Menu = () => {
  return (
    <div>
      <nav style={{
        display: 'flex',
        justifyContent: 'space between',
        flexDirection: 'column',
        height: '100vh',
        position: 'absolute',
        left: '0'
      }}>
        <span>
          <h1>Apollo</h1>
          <h4> Organizations</h4>
          <h5>
            Madison Haradine
          </h5>
        </span>
        <h4>Setting and Support</h4>
        <h5>Personal Settings</h5>
        <h5>Docs</h5>
        <h5> Contact Support</h5>
        <h5>Status Report</h5>
        <h5>Log Out</h5>
        <span>

        </span>
      </nav>

    </div>
  )
}

export default Menu