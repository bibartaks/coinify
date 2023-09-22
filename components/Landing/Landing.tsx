import React from "react"
import Image from "next/image"
import { Button } from "../ui/button"
import { montserrat, righteous } from "@/app/utilities/fonts"
import styles from "./landing.module.css"

export default function Landing() {
  return (
    <header className="px-5">
      <div className="max-w-[1400px] m-auto flex items-center justify-between py-20 ">
        {/* <div className="h-[300px] w-[400px] bg-primary absolute z-[-1] blur-[180px] top-[35%]"></div> */}
        <div>
          {/* <h1 className="text-4xl font-extrabold tracking-tight  lg:text-5xl lg:leading-[70px] mb-5">
            Discover the World of Cryptocurrencies: Empowering You to Explore
            and Trade!
          </h1> */}
          <h1
            className={`${righteous.className} ${styles.landingText}  mb-5   font-black   tracking-[2px]`}
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
            className="w-[600px]"
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
