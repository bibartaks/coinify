"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import React from "react"

export default function CoinImage({ image }: any) {
  return (
    <Avatar>
      <div className="">
        <AvatarImage width={42} className="mb-2" src={image} alt="coin logo" />
      </div>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
