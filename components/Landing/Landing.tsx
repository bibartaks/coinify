"use client"

import React from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { montserrat, righteous } from "@/app/utilities/fonts"
import styles from "./landing.module.css"
import Link from "next/link"
import LandingBtn from "../LandingBtn/LandingBtn"

export default function Landing() {
  // function handleScrollToMarket() {
  //   // Find the element you want to scroll to
  //   const targetElement = document.getElementById("market-section")

  //   // Check if the target element exists before scrolling
  //   if (targetElement) {
  //     const offset = targetElement.offsetTop - 70

  //     // Scroll to the adjusted position
  //     window.scrollTo({
  //       top: offset,
  //       behavior: "smooth",
  //     })
  //   }
  // }

  return (
    <header className="px-0 lg:px-5 xl:px-5 xll:px-5 py-20">
      <div className="max-w-[1400px] m-auto flex items-center justify-between py-20 flex-col lg:flex-row  xl:flex-row 2xl:flex-row">
        <div>
          <h1
            className={`${righteous.className} ${styles.landingText}  mb-5  font-black   tracking-[2px]`}
          >
            {" "}
            Discover the World of Cryptocurrencies: Empowering You to Explore
            and Trade!
          </h1>
          {/* <button
            onClick={handleScrollToMarket}
            // href={"#MarketCoinsShowCase "}
            className={`${montserrat.className} ${styles.landingBtn} scroll-smooth`}
          >
            See the market
          </button> */}
          <LandingBtn />
        </div>
        <div>
          <Image
            className="w-[200px] lg:w-[400px]"
            src="/eth.png"
            width={1000}
            height={1000}
            alt="Landing Logo"
          />
        </div>
      </div>
    </header>
  )
}
