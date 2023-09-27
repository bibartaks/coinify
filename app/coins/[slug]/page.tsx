import { montserrat, righteous } from "@/app/utilities/fonts"
import CoinImage from "@/components/CoinImage/CoinImage"
import { Card } from "@/components/ui/card"
import getTrendingCoinData from "@/lib/DataFetcher"
import CoinPriceConverter from "@/components/CoinPriceConverter/CoinPriceConverter"
import React from "react"
import priceFormator from "@/app/utilities/priceFormator"
import Link from "next/link"
import sanitizeHtml from "sanitize-html"

export default async function page({ params }: { params: { slug: string } }) {
  let { slug } = params
  const data = await getTrendingCoinData(
    `https://api.coingecko.com/api/v3/coins/${slug}`
  )

  return (
    <div className={`min-h-[100vh]`}>
      <div className="max-w-[1400px] m-auto py-10">
        <h1 className={`${montserrat.className} text-3xl mb-5`}>
          Coin Summary:
        </h1>
        <Card className="px-5 py-5 mb-5">
          <h1 className={`${montserrat.className} text-2xl mb-3`}>
            Coin Info:
          </h1>
          <CoinImage image={data.image.large} />
          <h3 className="mb-1">
            Name: {data.name} <span>({data.symbol})</span>{" "}
          </h3>
          <h3 className="mb-1">
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
          <h3 className="mb-1">
            Website:{" "}
            <Link href={data.links.homepage[0]}> {data.links.homepage[0]}</Link>
          </h3>
          <h3 className="mb-1">
            Officle forum:{" "}
            <Link href={data.links.official_forum_url[0]}>
              {" "}
              {data.links.official_forum_url[0]}
            </Link>
          </h3>
          <h3 className="mb-1">
            Twitter:{" "}
            <Link
              target="_blank"
              href={`https://twitter.com/${data.links.twitter_screen_name}`}
            >
              {data.links.twitter_screen_name}
            </Link>
          </h3>
          <h3>
            Facebook:{" "}
            <Link
              target="_blank"
              href={`twitter.com/${data.links.facebook_username}`}
            >
              {data.links.facebook_username}
            </Link>
          </h3>
        </Card>
        <Card className="px-5 py-5  w-min">
          <h1 className={` ${montserrat.className} text-2xl mb-5`}>
            {data.name} converter:
          </h1>
          <CoinPriceConverter
            bitcoinPrice={data.market_data.current_price.usd}
          />
        </Card>
      </div>
    </div>
  )
}

//
