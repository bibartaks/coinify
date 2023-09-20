import React from "react"
import getTrendingCoinData from "@/lib/DataFetcher"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    <div className="max-w-[1400px] m-auto">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
        Trending coins in last 24 hours:
      </h3>

      <table className="w-[600px] bg-[#0C0A09]   border border-secondary text-white">
        <thead>
          <tr>
            <th className="text-left py-3 pl-5 uppercase font-semibold text-sm border-b border-gray-300">
              #Rank
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
                <td className="text-left py-4 pl-5 border-b border-secondary">
                  #{coin.item.market_cap_rank}
                </td>
                <td className="text-left py-4  border-b border-secondary">
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
              {/* Add more rows as needed */}
            </tbody>
          </>
        ))}
      </table>
    </div>
  )
}
