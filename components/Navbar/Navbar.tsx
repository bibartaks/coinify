import Link from "next/link"
import React from "react"
import { montserrat, righteous } from "@/app/utilities/fonts"
import Search from "../Search/Search"
import MobileNavbar from "../MobileNavbar/MobileNavbar"

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0 px-5   z-10   backdrop-blur-2xl">
      <div className="max-w-[1400px] m-auto py-4 flex justify-between items-center">
        <div>
          <span
            className={` ${montserrat.className} text-2xl text-primary uppercase tracking-[3px]`}
          >
            Coinify
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className={`${montserrat.className} flex items-center`}>
            <li className="mr-10 hover:opacity-[0.9] ">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9] ">
              <Link href="home">Global info</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Market</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Trending Coins</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Contact Us</Link>
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </div>
        <div className="block lg:hidden xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  )
}
