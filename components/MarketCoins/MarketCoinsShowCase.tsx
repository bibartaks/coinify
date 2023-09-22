"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import { Card } from "../ui/card"
import Pagination from "../Pagination/Pagination"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import priceFormator from "@/app/utilities/priceFormator"
import Chart from "../Chart/Chart"
import { Skeleton } from "@/components/ui/skeleton"
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
import { Half1Icon } from "@radix-ui/react-icons"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"
import { ShowCoins } from "../ShowCoins/ShowCoins"
import { montserrat, righteous } from "@/app/utilities/fonts"

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
          <h3 className="scroll-m-20 px-5 text-2xl font-semibold tracking-tight ">
            Market update
          </h3>
        </div>
        <div className="px-5 flex items-center">
          <Pagination />
          <ShowCoins />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  className="ml-5"
                  onClick={() => router.refresh()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="text-[0.7rem]">Relode the page</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

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
              24 hours change
            </th>
            <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
              Market cap
            </th>
            <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
              24 Volume
            </th>
            <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
              Market Cap
            </th>
            <th className="text-left py-5   uppercase font-semibold text-sm border-b border-gray-300">
              Last 7 day
            </th>
          </tr>
        </thead>

        {data
          ? data?.map((coin: Coin) => (
              <React.Fragment key={coin.id}>
                <tbody className="bg-[#020817]">
                  <tr>
                    <td className="text-left py-4 pl-5 border-b border-secondary">
                      #{coin.market_cap_rank}
                    </td>
                    <td className="text-left py-4  pl-5 border-b border-secondary">
                      <div className="flex items-center">
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
                          <span className="text-gray-400">
                            {" "}
                            ({coin.symbol})
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-left py-4 pl-0 pr-10  border-b border-secondary">
                      {priceFormator(coin.current_price)}
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      <span
                        className={
                          coin.price_change_percentage_24h.toFixed(1) > 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {coin.price_change_percentage_24h.toFixed(1)}%
                      </span>
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      {priceFormator(coin.market_cap)}
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      {priceFormator(coin.total_volume)}
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      {priceFormator(coin.market_cap)}
                    </td>
                    <td className="text-left py-4 border-b border-secondary">
                      <div className="w-[100px]">
                        <Chart chartData={coin.sparkline_in_7d.price} />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))
          : Array.from({ length: 50 }, (_, index) => (
              <>
                {isLoading ? null : error ? (
                  <AlertDialog open={opended}>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          API Rate Limit Exceeded
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          I'm using a third-party API that has a rate limit, and
                          unfortunately, we've exceeded that limit. You should
                          be able to access the data again in 1-2 minutes. We
                          apologize for any inconvenience 🙏. If you'd like to
                          explore the data immediately, you can visit their
                          official site at
                          <Link
                            href="https://www.coingecko.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline ml-2"
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

                <tbody className="bg-[##09090B]">
                  <tr>
                    <td className="text-left py-4 pl-5 border-b border-secondary">
                      <Skeleton className="w-[40px] h-[40px]" />
                    </td>
                    <td className="text-left py-4  pl-5 border-b border-secondary">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <Avatar>
                            <Skeleton className="w-[40px] h-[40px] rounded-full " />
                          </Avatar>
                        </div>
                        <div>
                          <Skeleton className="h-7 w-[120px]" />
                        </div>
                      </div>
                    </td>
                    <td className="text-left py-4 pl-0 pr-10  border-b border-secondary">
                      <Skeleton className="h-7 w-[100px]" />
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      <span>
                        <Skeleton className="h-7 w-[50px]" />
                      </span>
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      <Skeleton className="h-7 w-[130px]" />
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      <Skeleton className="h-7 w-[100px]" />
                    </td>
                    <td className="text-left py-4 pl-0 border-b border-secondary">
                      <Skeleton className="h-7 w-[130px]" />
                    </td>
                    <td className="text-left py-4 border-b border-secondary">
                      <div className="w-[100px]">
                        <Skeleton className="h-7 w-[120px]" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
      </table>
    </Card>
  )
}
