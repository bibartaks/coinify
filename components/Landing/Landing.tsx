import React from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { montserrat, righteous } from "@/app/utilities/fonts"
import styles from "./landing.module.css"

export default function Landing() {
  return (
    <header className="px-0 lg:px-5 xl:px-5 xll:px-5 py-5">
      <div className="max-w-[1400px] m-auto flex items-center justify-between py-20 flex-col lg:flex-row  xl:flex-row 2xl:flex-row">
        <div>
          <h1
            className={`${righteous.className} ${styles.landingText}  mb-5  font-black   tracking-[2px]`}
          >
            {" "}
            Discover the World of Cryptocurrencies: Empowering You to Explore
            and Trade!
          </h1>
          <button className={`${montserrat.className} ${styles.landingBtn}`}>
            See the market
          </button>
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
