"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import React from "react"

export default function CoinImage({ image }: any) {
  return (
    <Avatar>
      <AvatarImage width={32} className="mb-2" src={image} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
