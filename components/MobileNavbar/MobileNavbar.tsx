"use client"

import React from "react"
import { Button } from "@/components/ui/button"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function MobileNavbar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <HamburgerMenuIcon />
        </MenubarTrigger>
        <MenubarContent className="block lg:hidden xl:hidden">
          <MenubarItem>
            {/* New Tab <MenubarShortcut>⌘T</MenubarShortcut> */}
            Home
          </MenubarItem>
          <MenubarItem>
            {/* New Window <MenubarShortcut>⌘N</MenubarShortcut> */}
            Global Info
          </MenubarItem>
          {/* <MenubarItem disabled>New Incognito Window</MenubarItem> */}
          <MenubarItem>Market</MenubarItem>
          <MenubarItem>Trending Coins</MenubarItem>
          <MenubarItem>Contact Us</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
