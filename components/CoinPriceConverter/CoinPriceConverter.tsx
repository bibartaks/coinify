"use client"

import React, { useRef, useState } from "react"
import { Badge } from "../ui/badge"
import priceFormator from "@/app/utilities/priceFormator"

export default function CoinPriceConverter({
  bitcoinPrice,
}: {
  bitcoinPrice: number
}) {
  const [bitcoinValue, setBitcoinValue] = useState(0)

  return (
    <>
      <input
        type="number"
        // value={bitcoinValue}
        placeholder="Enter your value"
        className="px-2 py-1 mb-2"
        onChange={e => {
          // const newValue = parseFloat(e.target.value)
          // if (!isNaN(newValue) && newValue >= 1) {
          //   setBitcoinValue(newValue)
          // }
          setBitcoinValue(e.target.value)
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
