import React from "react"
import Logo from "./NavbarComponents/Logo"
import CTASection from "./NavbarComponents/CTASection"
import { navbar } from "../styles/navbar.module.css"

const NavBar = () => {
  return (
    <div className={navbar}>
      <Logo />

      <CTASection />
    </div>
  )
}

export default React.memo(NavBar)
