import React from "react"
import { Outlet } from "react-router-dom"

import Header from "../header/Header"
import SubFooter from "../subFooter/SubFooter"
import Supheader from "../supheader/Supheader"

function Layout() {
  return (
    <div>
      <Supheader />
      <Header />
      <Outlet />
      <SubFooter />
    </div>
  )
}

export default Layout
