import React from 'react'


const links = [
  {
    id: 1,
    title: 'Personal Settings'
  },
  {
    id: 2,
    title: 'Docs'
  },
  {
    id: 1,
    title: 'Contact Support'
  },
  {
    id: 1,
    title: 'Status Report'
  },
  {
    id: 1,
    title: 'Log Out'
  },
]

const Menu = () => {

  return (
    <div style={{

    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '98vh',
        width: '300px',
        backgroundColor: '#252E50',
        color: 'white',
        position: 'absolute',
        left: '0',
        fontSize: '0.8rem',
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 'lighter',
        padding: '1rem'
      }}>
        <div>
          <h1>Apollo</h1>
          <h4> Organizations</h4>
          <h5>
            Madison Haradine
          </h5>
        </div>
        <div>
          <h4 style={{ textTransform: 'uppercase' }}>Settings and Support</h4>
          <ul> {links.map((link, index) => {
            return (
              <li key={index} style={{
                listStyle: 'none'
              }}
              >
                <h5>{link.title}</h5>
              </li>
            )
          })}</ul>
        </div>
      </nav>
    </div >
  )
}

export default Menu