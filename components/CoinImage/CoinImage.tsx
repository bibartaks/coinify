"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import React from "react"

export default function CoinImage({ image }) {
  return (
    <Avatar>
      <AvatarImage width={62} className="" src={image} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
