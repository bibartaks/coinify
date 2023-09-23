"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover"
import { Card } from "../ui/card"
import useSWR from "swr"
import fetcher from "@/app/utilities/fetcher"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function Search() {
  const [click, setClick] = useState(false)
  const [searchQuery, setSearchQuery] = useState()

  function handleSearch() {
    setClick(!click)
  }

  const { data } = useSWR(
    `https://api.coingecko.com/api/v3/search?query=${searchQuery}`,
    fetcher
  )

  console.log(data)
  console.log(searchQuery)

  return (
    <Link className={buttonVariants({ variant: "outline" })} href={"/search"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-4 h-4 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      Search
    </Link>
  )
}
