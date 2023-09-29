"use client"

import React, { useRef, useState } from "react"
import { Badge } from "../ui/badge"
import priceFormator from "@/app/utilities/priceFormator"

export default function CoinPriceConverter({
  bitcoinPrice,
}: {
  bitcoinPrice: number
}) {
  const [bitcoinValue, setBitcoinValue] = useState<number>(0)

  return (
    <>
      <input
        type="number"
        placeholder="Enter your value"
        className="px-2 py-1 mb-2 border border-input bg-transparent shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        onChange={e => {
          setBitcoinValue(parseFloat(e.target.value))
        }}
      />
      <br />
      <Badge className="px-5 py-1 text-1xl max-w-[200px] overflow-auto">
        {bitcoinValue
          ? priceFormator(bitcoinValue * bitcoinPrice)
          : priceFormator(0)}
      </Badge>
    </>
  )
}
