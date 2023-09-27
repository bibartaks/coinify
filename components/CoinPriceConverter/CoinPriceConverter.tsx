"use client"
import React, { useRef, useState } from "react"
import { Badge } from "../ui/badge"
import priceFormator from "@/app/utilities/priceFormator"

export default function CoinPriceConverter({
  bitcoinPrice,
}: {
  bitcoinPrice: number
}) {
  const [bitcoinValue, setBitcoinValue] = useState(1)

  return (
    <>
      <input
        type="number"
        value={bitcoinValue}
        placeholder="Enter your value"
        className="px-2 py-1 mb-2"
        onChange={e => {
          const newValue = parseFloat(e.target.value)
          if (!isNaN(newValue) && newValue >= 0) {
            setBitcoinValue(newValue)
          }
        }}
      />
      <br />
      <Badge className="px-5 py-1 text-1xl">
        {bitcoinValue
          ? priceFormator(bitcoinValue * bitcoinPrice)
          : priceFormator(1 * bitcoinPrice)}
      </Badge>
    </>
  )
}
