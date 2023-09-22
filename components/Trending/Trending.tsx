import React from "react"
import getTrendingCoinData from "@/lib/DataFetcher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "../ui/card"
import styles from "./trending.module.css"
import { montserrat } from "@/app/utilities/fonts"

interface Coin {
  item: {
    name: string
    symbol: string
    market_cap_rank: string
    large: string
  }
}

export default async function Trending() {
  const data = await getTrendingCoinData(
    "https://api.coingecko.com/api/v3/search/trending"
  )

  return (
    <div className="max-w-[1400px] m-auto py-10">
      <h3
        className={`scroll-m-20 text-2xl font-semibold tracking-tight mb-5 ${montserrat.className}`}
      >
        Trending coins in last 24 hours:
      </h3>

      <Card className="w-[610px] pt-0  pb-5  overflow-hidden">
        <table className="w-[100%]  text-white">
          <thead className={` ${montserrat.className} py-5 bg-secondary`}>
            <tr>
              <th className="text-left py-3 pl-5 uppercase font-semibold text-sm border-b border-gray-300">
                Rank
              </th>
              <th className="text-left py-3 pr-5  uppercase font-semibold text-sm border-b border-gray-300">
                Coin
              </th>
            </tr>
          </thead>

          {data.coins.map((coin: Coin) => (
            <>
              <tbody>
                <tr>
                  <td
                    className={`text-left py-4 pl-5 border-b border-secondary`}
                  >
                    #{coin.item.market_cap_rank}
                  </td>
                  <td className="text-left py-4    border-b border-secondary">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <Avatar>
                          <AvatarImage src={coin.item.large} />
                          <AvatarFallback>?</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        {coin.item.name}{" "}
                        <span className="text-gray-400">
                          {" "}
                          ({coin.item.symbol})
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </>
          ))}
        </table>
      </Card>
    </div>
  )
}
