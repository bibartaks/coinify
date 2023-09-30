import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Skeleton } from "../ui/skeleton"
import priceFormator from "@/app/utilities/priceFormator"
import Chart from "../Chart/Chart"
import Link from "next/link"

interface Coin {
  id: string
  name: string
  symbol: string
  market_cap_rank: string
  image: string
  current_price: number
  price_change_percentage_24h: number | string
  market_cap: number
  total_volume: number
  sparkline_in_7d: {
    price: number[]
  }
}

function MarketCoinTableRow({ coin }: any) {
  return (
    <tbody key={coin.id} className="bg-[#020817]">
      <tr>
        <td className="text-left py-4 pl-5 border-b border-secondary">
          #{coin.market_cap_rank}
        </td>
        <td className="text-left py-4  pl-5 border-b border-secondary">
          <div className="flex  w-[180px] mr-5 items-center">
            <Link href={`coins/${coin.id}`} className="flex items-center">
              <div className="mr-2">
                <Avatar>
                  <AvatarImage width={30} src={coin.image} />
                  <AvatarFallback>
                    <Skeleton className="w-[40px] h-[40px] rounded-full " />
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                {coin.name}{" "}
                <span className="text-gray-400"> ({coin.symbol})</span>
              </div>
            </Link>
          </div>
        </td>
        <td className="text-left py-4 pl-0 pr-10   border-b border-secondary">
          {priceFormator(coin.current_price)}
        </td>
        <td className="text-left py-4 pl-0 border-b  border-secondary">
          {coin.price_change_percentage_24h ? (
            <span
              className={
                coin.price_change_percentage_24h.toFixed(1) > 0
                  ? "text-green-500 mr-5"
                  : "text-red-500 mr-5"
              }
            >
              {coin.price_change_percentage_24h.toFixed(1)}%
            </span>
          ) : (
            <span>undifined</span>
          )}
        </td>
        <td className="text-left py-5 px-10 lg:px-0 xl:px-0 xll:px-0 pl-0  border-b border-secondary">
          {coin.market_cap ? (
            priceFormator(coin.market_cap)
          ) : (
            <span>undifined</span>
          )}
        </td>
        <td className="text-left py-4 pl-0 px-10 lg:px-0 xl:px-0 xll:px-0  border-b border-secondary">
          {coin.total_volume ? (
            priceFormator(coin.total_volume)
          ) : (
            <span>undifined</span>
          )}
        </td>
        <td className="hidden text-left py-4 border-b border-secondary">
          {coin.market_cap ? (
            priceFormator(coin.market_cap)
          ) : (
            <span>undifined</span>
          )}
        </td>
        <td className="text-left py-4  pr-5 lg:pr-0 xl:pr-0 xll:pr-0   border-b border-secondary">
          <div className="w-[100px]">
            <Chart chartData={coin.sparkline_in_7d.price} />
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default MarketCoinTableRow
