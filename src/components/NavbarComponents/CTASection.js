import React from "react"
import { ctaSection } from "../../styles/navbar.module.css"
const CTASection = () => {
  return (
    <div className={ctaSection}>
      <p>About</p>
      <p>Work</p>
      <p>Other</p>
      <button>CTA</button>
    </div>
  )
}

export default CTASection
