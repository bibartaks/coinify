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
    <div className={`min-h-[100vh] px-5`}>
      <div className="max-w-[1400px] m-auto py-10">
        <h1 className={`${montserrat.className} text-3xl mb-5`}>
          Coin Summary:
        </h1>
        <Card className="px-3 lg:px-5 xl:px-5 xll:px-5 py-5 mb-5 ">
          <h1 className={`${montserrat.className}  text-2xl mb-3`}>
            Coin Info: <ShareCoin url="http://localhost:3000/coins/bitcoin" />
          </h1>
          <CoinImage image={data.image.large} />
          <h3 className="mb-4 mt-5">
            <span className="text-muted-foreground font-light"> Name:</span>{" "}
            {data.name} <span>({data.symbol})</span>{" "}
          </h3>
          <h3 className="mb-4">
            <span className="text-muted-foreground font-light">
              {" "}
              Current price:
            </span>{" "}
            {priceFormator(data.market_data.current_price.usd)}
          </h3>
          <h3 className="text-1xl mb-2 text-muted-foreground font-light">
            Description:{" "}
          </h3>
          <p
            className={`text-left lg:text-justify mb-5 leading-[200%] `}
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(data.description?.en),
            }}
          />
          <h1 className={`${montserrat.className} text-2xl mb-3`}>
            Social Info:
          </h1>
          {data.links.homepage[0] && (
            <h3 className="mb-1 text-">
              <span className=" text-muted-foreground">Website: </span>
              <Link href={data.links.homepage[0]} className="text-primary">
                {" "}
                {data.links.homepage[0]}
              </Link>
            </h3>
          )}
          {data.links.official_forum_url[0] && (
            <h3 className="mb-1">
              <span className=" text-muted-foreground">Officle forum: </span>
              <Link
                href={data.links.official_forum_url[0]}
                className="text-primary"
              >
                {" "}
                {data.links.official_forum_url[0]}
              </Link>
            </h3>
          )}

          {data.links.twitter_screen_name && (
            <h3 className="mb-1">
              <span className=" text-muted-foreground">Twitter: </span>
              <Link
                target="_blank"
                href={`https://twitter.com/${data.links.twitter_screen_name}`}
                className="text-primary"
              >
                https://twitter.com/{data.links.twitter_screen_name}
              </Link>
            </h3>
          )}
          {data.links.facebook_username && (
            <h3>
              <span className="text-muted-foreground">Facebook: </span>
              <Link
                target="_blank"
                href={`twitter.com/${data.links.facebook_username}`}
                className="text-primary"
              >
                https://facebook.com/{data.links.facebook_username}
              </Link>
            </h3>
          )}
        </Card>
        <Card className="px-3 lg:px-5 xl:px-5 xll:px-5 py-5 w-min mb-5">
          <h1 className={` ${montserrat.className} text-2xl mb-5`}>
            {data.name} converter:
          </h1>
          <CoinPriceConverter
            bitcoinPrice={data.market_data.current_price.usd}
          />
        </Card>
        <Card className="px-3 lg:px-5 xl:px-5 xll:px-5 py-5">
          <h1 className={`${montserrat.className} text-2xl mb-2`}>
            BTC Price Statistics
          </h1>
          <div className="flex justify-between max-w-[100%] md:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%] xll:max-w-[20%]  mt-5">
            <div className="">
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                Bitcoin Price
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                24h Low / 24h High
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                Total Volume
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {" "}
                Market Cap Rank{" "}
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {" "}
                Fully Diluted Valuation{" "}
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {" "}
                Market cap{" "}
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                Max supply{" "}
              </h4>
              <h4 className="mb-5 text-muted-foreground text-sm lg:text-1xl xl:text-1xl xll:text-1xl ">
                Circulating supply:{" "}
              </h4>
            </div>
            <div className="">
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.current_price.usd)}
              </h4>
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.high_24h.usd)} /{" "}
                {priceFormator(data.market_data.low_24h.usd)}
              </h4>
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.total_volume.usd)}
              </h4>
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                #{data.market_cap_rank}
              </h4>
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.fully_diluted_valuation.usd)}
              </h4>
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.market_cap.usd)}
              </h4>
              <h4 className="mb-5 text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.max_supply)}
              </h4>
              <h4 className="text-sm lg:text-1xl xl:text-1xl xll:text-1xl">
                {priceFormator(data.market_data.circulating_supply)}
              </h4>
            </div>
          </div>

          <Card className="max-w-[100%] overflow-hidden mt-10">
            <Table className="max-w-[100%] h-[100%]">
              <TableHeader>
                <TableRow>
                  <TableHead className="border-r text-center ">1h</TableHead>
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
        <Card className="max-w-[100%] px-3 lg:px-5 xl:px-5 xll:px-5 py-5 mt-5">
          <h1 className={`${montserrat.className} text-2xl mb-4`}>
            {data.name} Price Chart ({data.symbol.toLocaleUpperCase()})
          </h1>
          <PriceChart coinId={data.id} />
        </Card>
      </div>
    </div>
  )
}
