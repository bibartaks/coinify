"use client"

import React from "react"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { montserrat } from "@/app/utilities/fonts"
import Link from "next/link"

export default function MobileNavbar() {
  return (
    <Menubar className={montserrat.className}>
      <MenubarMenu>
        <MenubarTrigger aria-label="Menubar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </MenubarTrigger>
        <MenubarContent
          className={` ${montserrat.className}block lg:hidden xl:hidden`}
        >
          <MenubarItem>
            <Link className={montserrat.className} href={"/"}>
              Home
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link className={montserrat.className} href={"#global-info"}>
              Global Info
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link className={montserrat.className} href={"#market-section"}>
              Market
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link className={montserrat.className} href={"#trending-coins"}>
              Trending Coins
            </Link>
          </MenubarItem>
          <MenubarItem>
            <Link className={montserrat.className} href={"/contact"}>
              Contact Us
            </Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
