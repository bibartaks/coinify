import { montserrat } from "@/app/utilities/fonts"
import CoinImage from "@/components/CoinImage/CoinImage"
import { Card } from "@/components/ui/card"
import getTrendingCoinData from "@/lib/DataFetcher"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Badge } from "@/components/ui/badge"

import React from "react"
import priceFormator from "@/app/utilities/priceFormator"
import { Link1Icon, Link2Icon } from "@radix-ui/react-icons"

export default async function page({ params }) {
  let { slug } = params
  const data = await getTrendingCoinData(
    `https://api.coingecko.com/api/v3/coins/${slug}`
  )
  return (
    <div className="min-h-[100vh]">
      <div className="max-w-[1400px] m-auto py-10">
        <h1 className={`${montserrat.className} text-3xl mb-5`}>
          Coin Summary:
        </h1>
        <Card className="w-max px-2 py-5 border-2">
          <Badge variant="outline" className="mb-2">
            Rank #{data.market_cap_rank}
          </Badge>
          <div className="flex items-center">
            <CoinImage image={data.image.large} />
            <h1 className="text-[1.4rem] ml-2">
              {data.name} <span>({data.symbol})</span>{" "}
            </h1>
          </div>
          <div className="bg-secondary px-2 py-1 mt-5 rounded-sm flex items-center">
            <span className="mr-2">
              <Link2Icon />
            </span>
            <span>{data.links.homepage[0]}</span>
          </div>
        </Card>
      </div>
    </div>
  )
}

//
