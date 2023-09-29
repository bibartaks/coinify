"use client"

import { montserrat } from "@/app/utilities/fonts"
import styles from "../Landing/landing.module.css"
import React from "react"

export default function LandingBtn() {
  function handleScrollToMarket() {
    // Find the element you want to scroll to
    const targetElement = document.getElementById("market-section")

    // Check if the target element exists before scrolling
    if (targetElement) {
      const offset = targetElement.offsetTop - 70

      // Scroll to the adjusted position
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      })
    }
  }
  return (
    <button
      onClick={handleScrollToMarket}
      // href={"#MarketCoinsShowCase "}
      className={`${montserrat.className} ${styles.landingBtn} scroll-smooth`}
    >
      See the market
    </button>
  )
}
