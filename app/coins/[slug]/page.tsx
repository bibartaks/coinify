import { montserrat, righteous } from "@/app/utilities/fonts"
import CoinImage from "@/components/CoinImage/CoinImage"
import { Card } from "@/components/ui/card"
import getTrendingCoinData from "@/lib/DataFetcher"
import CoinPriceConverter from "@/components/CoinPriceConverter/CoinPriceConverter"
import React from "react"
import priceFormator from "@/app/utilities/priceFormator"
import Link from "next/link"
import sanitizeHtml from "sanitize-html"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Share1Icon, Share2Icon } from "@radix-ui/react-icons"
import { Badge } from "@/components/ui/badge"
import ShareCoin from "@/components/ShareCoin/ShareCoin"
import PriceChart from "@/components/CryptoCoinChart/CryptoCoinChart"

export default async function page({ params }: { params: { slug: string } }) {
  let { slug } = params
  const data = await getTrendingCoinData(
    `https://api.coingecko.com/api/v3/coins/${slug}`
  )

  const coinChartData = await getTrendingCoinData(
    `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30`
  )

  return (
    <div className={`min-h-[100vh]`}>
      <div className="max-w-[1400px] m-auto py-10">
        <h1 className={`${montserrat.className} text-3xl mb-5`}>
          Coin Summary:
        </h1>
        <Card className="px-5 py-5 mb-5">
          <h1 className={`${montserrat.className} text-2xl mb-3`}>
            Coin Info: <ShareCoin url="http://localhost:3000/coins/bitcoin" />
          </h1>
          <CoinImage image={data.image.large} />
          <h3 className="mb-1">
            Name: {data.name} <span>({data.symbol})</span>{" "}
          </h3>
          <h3 className="mb-2">
            Current price: {priceFormator(data.market_data.current_price.usd)}
          </h3>
          <h3 className="text-1xl mb-2">Description: </h3>
          <p
            className={`text-justify mb-5 leading-[200%]`}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.description?.en),
            }}
          />
          <h1 className={`${montserrat.className} text-2xl mb-3`}>
            Social Info:
          </h1>
          {data.links.homepage[0] && (
            <h3 className="mb-1">
              Website:{" "}
              <Link href={data.links.homepage[0]} className="text-[#ff02cc]">
                {" "}
                {data.links.homepage[0]}
              </Link>
            </h3>
          )}
          {data.links.official_forum_url[0] && (
            <h3 className="mb-1">
              Officle forum:{" "}
              <Link
                href={data.links.official_forum_url[0]}
                className="text-[#ff02cc]"
              >
                {" "}
                {data.links.official_forum_url[0]}
              </Link>
            </h3>
          )}

          {data.links.twitter_screen_name && (
            <h3 className="mb-1">
              Twitter:{" "}
              <Link
                target="_blank"
                href={`https://twitter.com/${data.links.twitter_screen_name}`}
                className="text-[#ff02cc]"
              >
                https://twitter.com/{data.links.twitter_screen_name}
              </Link>
            </h3>
          )}
          {data.links.facebook_username && (
            <h3>
              Facebook:{" "}
              <Link
                target="_blank"
                href={`twitter.com/${data.links.facebook_username}`}
                className="text-[#ff02cc]"
              >
                https://facebook.com/{data.links.facebook_username}
              </Link>
            </h3>
          )}
        </Card>
        <Card className="px-5 py-5 w-min mb-5">
          <h1 className={` ${montserrat.className} text-2xl mb-5`}>
            {data.name} converter:
          </h1>
          <CoinPriceConverter
            bitcoinPrice={data.market_data.current_price.usd}
          />
        </Card>
        <Card className="px-5 py-5">
          <h1 className={`${montserrat.className} text-2xl mb-2`}>
            BTC Price Statistics
          </h1>
          <div className="flex   justify-between max-w-[30%]">
            <div>
              <h4 className="mb-1">Bitcoin Price</h4>
              <h4 className="mb-1">24h Low / 24h High</h4>
              <h4 className="mb-1">Total Volume</h4>
              <h4 className="mb-1"> Market Cap Rank </h4>
              <h4 className="mb-1"> Fully Diluted Valuation: </h4>
              <h4 className="mb-1"> Market cap: </h4>
              <h4 className="mb-1">Max supply: </h4>
              <h4 className="mb-1">Circulating supply: </h4>
            </div>
            <div>
              <h4 className="mb-1">
                {priceFormator(data.market_data.current_price.usd)}
              </h4>
              <h4 className="mb-1">
                {priceFormator(data.market_data.high_24h.usd)} /{" "}
                {priceFormator(data.market_data.low_24h.usd)}
              </h4>
              <h4 className="mb-1">
                {priceFormator(data.market_data.total_volume.usd)}
              </h4>
              <h4 className="mb-1">#{data.market_cap_rank}</h4>
              <h4 className="mb-1">
                {priceFormator(data.market_data.fully_diluted_valuation.usd)}
              </h4>
              <h4 className="mb-1">
                {priceFormator(data.market_data.market_cap.usd)}
              </h4>
              <h4 className="mb-1">
                {priceFormator(data.market_data.max_supply)}
              </h4>
              <h4>{priceFormator(data.market_data.circulating_supply)}</h4>
            </div>
          </div>

          <Card className="max-w-[40%] overflow-hidden mt-5">
            <Table className="max-w-[100%] h-[100%]">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-r text-center">1h</TableHead>
                  <TableHead className="border-r text-center">24h</TableHead>
                  <TableHead className="border-r text-center">7d</TableHead>
                  <TableHead className="border-r text-center">14d</TableHead>
                  <TableHead className="border-r text-center">30d</TableHead>
                  <TableHead className="border-l text-center">1y</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell
                    className={`border-r text-center ${
                      data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      ) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                      1
                    )}
                    %
                  </TableCell>
                  <TableCell
                    className={`border-r text-center ${
                      data.market_data.price_change_percentage_24h.toFixed(1) >
                      0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.market_data.price_change_percentage_24h.toFixed(1)}%
                  </TableCell>
                  <TableCell
                    className={`border-r text-center ${
                      data.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      ) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.market_data.price_change_percentage_7d.toFixed(1)}%
                  </TableCell>
                  <TableCell
                    className={`border-r text-center ${
                      data.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      ) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.market_data.price_change_percentage_14d.toFixed(1)}%
                  </TableCell>
                  <TableCell
                    className={`border-r text-center ${
                      data.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      ) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.market_data.price_change_percentage_30d.toFixed(1)}%
                  </TableCell>
                  <TableCell
                    className={`border-r text-center ${
                      data.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                        1
                      ) > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.market_data.price_change_percentage_1y.toFixed(1)}%
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Card>
        <Card className="max-w-[100%] px-5 py-5 mt-5">
          <h1 className={`${montserrat.className} text-2xl mb-4`}>
            {data.name} Price Chart ({data.symbol.toLocaleUpperCase()})
          </h1>
          <PriceChart coinId={data.id} coinChartData={coinChartData} />
        </Card>
      </div>
    </div>
  )
}

//
