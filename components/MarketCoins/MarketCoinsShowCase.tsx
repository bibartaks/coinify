"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import { Card } from "../ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { ShowCoins } from "../ShowCoins/ShowCoins"
import { montserrat, righteous } from "@/app/utilities/fonts"
import Loading from "./Loading/Loading"
import MarketCoinTableRow from "./MarketCoinsTable"
import MarketFilters from "./MarketFilters"

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

export default function MarketCoinsShowCase({ data, error, isLoading }: any) {
  const [opended, setOpened] = useState(true)
  const router = useRouter()

  return (
    <Card className={`max-w-[1400px] m-auto py-10 `}>
      <div className="flex items-center justify-between pb-5">
        <div>
          <h3
            className={`scroll-m-20 px-5 text-1xl lg:text-2xl xl:text-2xl xll:text-2xl font-semibold tracking-tight ${montserrat.className}`}
          >
            Market update
          </h3>
        </div>
        <div className="px-5 flex items-center">
          <MarketFilters />
        </div>
      </div>

      <div className="overflow-x-auto lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%]">
        <table className="w-[100%] m-auto bg-[#0C0A09]   text-white   rounded-sm">
          <thead className={`border-t border-white`}>
            <tr className={`bg-secondary font-light ${montserrat.className}`}>
              <th className="text-left py-5 pl-5 uppercase font-semibold text-sm border-b border-gray-300">
                Rank
              </th>
              <th className="text-left py-5 pr-5 pl-5  uppercase font-semibold text-sm border-b border-gray-300">
                Coin
              </th>
              <th className="text-left py-5  uppercase font-semibold text-sm border-b border-gray-300">
                Price
              </th>
              <th className="text-left py-5  uppercase font-semibold text-sm border-b border-gray-300">
                24h
              </th>
              <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
                Market cap
              </th>
              <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
                24 Volume
              </th>
              <th className="  hidden text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
                Market Cap
              </th>
              <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
                Last 7 day
              </th>
            </tr>
          </thead>

          {/* {data?.map((coin: Coin) => (
            <MarketCoinTableRow coin={coin} key={coin.id} />
          ))} */}

          {data
            ? data?.map((coin: Coin) => (
                <MarketCoinTableRow coin={coin} key={coin.id} />
              ))
            : Array.from({ length: 50 }, (_, index) => (
                <React.Fragment key={index}>
                  {isLoading ? null : error ? (
                    <AlertDialog open={opended}>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            API Rate Limit Exceeded
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            I'm using a third-party API that has a rate limit,
                            and unfortunately, we've exceeded that limit. You
                            should be able to access the data again in 1-2
                            minutes. We apologize for any inconvenience 🙏. If
                            you'd like to explore the data immediately, you can
                            visit their official site at
                            <Link
                              href="https://www.coingecko.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 chhover:underline ml-2"
                            >
                              https://www.coingecko.com/
                            </Link>
                            .
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogAction onClick={() => setOpened(false)}>
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : null}

                  <Loading />
                </React.Fragment>
              ))}
        </table>
      </div>
    </Card>
  )
}
