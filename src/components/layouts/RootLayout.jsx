import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  )
}

export default RootLayout