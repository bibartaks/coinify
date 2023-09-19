import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <nav className="border-b sticky top-0">
      <div className="max-w-[1400px] m-auto py-5 flex justify-between items-center">
        <div>
          <span className="text-2xl text-primary uppercase tracking-[3px]">
            Coinify
          </span>
        </div>
        <div>
          <ul className="flex">
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Home</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Market</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Join Now</Link>
            </li>
            <li className="mr-10 hover:opacity-[0.9]">
              <Link href="home">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
