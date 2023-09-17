import React from "react"
import { Outlet } from "react-router-dom"

import Header from "../header/Header"
import Supheader from "../supheader/Supheader"

function Layout() {
  return (
    <div>
      <Supheader />
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
