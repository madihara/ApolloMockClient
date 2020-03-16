import React from 'react'

import Menu from './components/menu bar/Menu'
import UserPage from './Pages/UserPage.jsx'

import './App.css'

const App = () => {
  return (
    <main style={{display: 'flex', flexDirection: 'row', background:'#F5F6F8'}}>
     
      <Menu />
      <UserPage />
   
    </main>
  )
}

export default App

