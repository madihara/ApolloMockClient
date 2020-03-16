import React from 'react'
import styled from 'styled-components'

import { links } from './menuConstants'

const Menu = () => {

  const NavMenu = styled.nav`
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      height: 98vh;
      width: 180px;
      background-color: #252E50;
      color: white;
      position: absolute;
      left: 0;
      font-size: 0.9rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: lighter;
      padding: 1.5rem 1.5rem 2rem;
      line-height: 0.6rem;
  `
  const Logo = styled.h1`
      text-transform: uppercase;
      font-size: 0.6rem;
      padding: 0rem 0 2rem;
      letter-spacing: 0.3rem;
  `

  const Title = styled.h4`
    text-transform: uppercase;
    font-size: 0.6rem;
    color: #848484;
    letter-spacing: 1px;
  `
  const List = styled.ul`
    padding:0;
    margin: none;
`
  const NavLink = styled.li`
      list-style: none;
      padding: 8px;
      font-size: 0.75rem;
      border-radius: 5px;

      &:hover{
        background-color:#1B2240;
      }

      &:active{
        background-color: #5268C2;
      }
  `
  const Icon = styled.img``


  return (
    <div style={{

    }}>
      <NavMenu>
        <div>
          <Logo>Apollo</Logo>
          <Title> Organizations</Title>
          <NavLink>Madison Haradine</NavLink>
        </div>
        <div>
          <Title>Settings and Support</Title>
          <List>
            {links.map((link, index) => {
              return (
                <NavLink key={index}>
                  {link.title}
                </NavLink>
              )
            })}
          </List>
        </div>
      </NavMenu>
    </div >
  )
}

export default Menu