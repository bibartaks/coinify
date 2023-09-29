"use client"

import React from "react"
import useSWR from "swr"
import { useSearchParams } from "next/navigation"
import MarketCoinsShowCase from "./MarketCoinsShowCase"
import fetcher from "@/app/utilities/fetcher"

interface CoinData {
  id: string
  name: string
  symbol: string
}

export default function MarketCoins() {
  const searchParams = useSearchParams()
  const search = searchParams.get("page")
  const show = searchParams.get("show")

  const { data, error, isLoading } = useSWR(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${
      show ? show : "20"
    }&page=${search}&sparkline=false&locale=en&sparkline=true`,
    fetcher
  )
  return (
    <div id="market-coins" className="scroll-m-20">
      <MarketCoinsShowCase
        data={data}
        error={error ? true : false}
        isLoading={isLoading ? true : false}
      />
    </div>
  )
}
