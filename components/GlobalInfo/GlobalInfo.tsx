import { montserrat } from "@/app/utilities/fonts"
import React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import globalCoinsFetcher from "@/lib/globalCoinsFetcher"
import priceFormator from "@/app/utilities/priceFormator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Chart from "../Chart/Chart"
import GlobalChart from "../GlobalChart/GlobalChart"

export default async function GlobalInfo() {
  const data = await globalCoinsFetcher(
    "https://api.coingecko.com/api/v3/global"
  )

  const chartData = await globalCoinsFetcher(
    "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily"
  )

  function calculateTotalMarketCap(data) {
    let total = 0
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        total += data[key]
      }
    }
    return priceFormator(total)
  }
  return (
    <div className="max-w-[1400px] m-auto flex flex-col xl:flex-row xll:flex-row  justify-between  gap-5">
      <Card className="px-5 py-5 w-[100%]">
        <h3
          className={`scroll-m-20 text-1xl lg:text-2xl xl:text-2xl xll:text-2xl font-semibold tracking-tight mb-5 ${montserrat.className}`}
        >
          Global info :
        </h3>
        <h2 className="text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] xll:text-[1.2rem] mb-2">
          📈 Total Active Cryptocurrencies :{" "}
          {data.data.active_cryptocurrencies.toLocaleString()}
        </h2>
        <h3 className="text-[1rem] lg:text-[1.2rem] xl:text-[1.2rem] xll:text-[1.2rem] mb-5">
          🌏 Markets Tracked: {data.data.markets}
        </h3>

        {/* Mobile Info */}
        <div className="lg:hidden xl:hidden xll:hidden">
          <Card className="px-2 py-2 w-[100%] mb-5">
            <h3 className="text-[1rem]">💰 Total Market Capitalization:</h3>
            <div className="px-2 leading-10">
              <li className="text-[0.9rem]">
                {" "}
                USD {calculateTotalMarketCap(data.data.total_market_cap)}
              </li>
              <li className="text-[0.9rem]">
                Bitcoin (BTC) {priceFormator(data.data.total_market_cap.btc)}
              </li>
              <li className="text-[0.9rem]">
                {" "}
                Ethereum (ETH) {priceFormator(data.data.total_market_cap.eth)}
              </li>
            </div>
          </Card>
          <Card className="px-2 py-2 w-[100%] mb-5">
            <h3 className="text-[1rem]">📊 Total 24-Hour Trading Volume:</h3>
            <div className="px-3 leading-10">
              <li className="text-[0.9rem]">
                USD: {calculateTotalMarketCap(data.data.total_volume)}
              </li>
              <li className="text-[0.9rem]">
                Bitcoin (BTC) {priceFormator(data.data.total_volume.btc)}
              </li>
              <li className="text-[0.9rem]">
                {" "}
                Ethereum (ETH) {priceFormator(data.data.total_volume.eth)}
              </li>
            </div>
          </Card>
          <Card className="px-2 py-2 w-[100%]">
            <h3 className="text-[1rem] mb-2">
              📊 Market Capitalization Distribution:
            </h3>

            {Object.keys(data.data.market_cap_percentage).map(coin => (
              <div
                key={coin}
                className="flex justify-between items-center mt-2 max-w-[400px]  "
              >
                <span className="mr-2 text-[0.9rem]">
                  {" "}
                  {coin.toLocaleUpperCase()}{" "}
                  {data.data.market_cap_percentage[coin].toFixed(2)}%
                </span>
                <Progress
                  value={data.data.market_cap_percentage[coin].toFixed(2)}
                  className="w-[50%] "
                />
              </div>
            ))}
          </Card>
        </div>

        <Tabs
          defaultValue="totalCapitalization"
          className="hidden   xl:block xll:block w-[600px]"
        >
          <TabsList className="">
            <TabsTrigger value="totalCapitalization">
              💰 Total Market Cap:
            </TabsTrigger>
            <TabsTrigger value="totalTradVolume">
              📊 24-Hour Trading Volume:
            </TabsTrigger>
            <TabsTrigger value="marketCapDistribution">
              📊 Market Cap Distribution:{" "}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="totalCapitalization">
            <Card className="px-2 py-2 w-[600px]">
              <h3 className="text-[1.2rem]">💰 Total Market Capitalization:</h3>
              <div className="px-2 leading-10">
                <li>
                  {" "}
                  USD {calculateTotalMarketCap(data.data.total_market_cap)}
                </li>
                <li>
                  Bitcoin (BTC) {priceFormator(data.data.total_market_cap.btc)}
                </li>
                <li>
                  {" "}
                  Ethereum (ETH) {priceFormator(data.data.total_market_cap.eth)}
                </li>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="totalTradVolume">
            <Card className="px-2 py-2 w-[600px]">
              <h3 className="text-[1.2rem]">
                📊 Total 24-Hour Trading Volume:
              </h3>
              <div className="px-3 leading-10">
                <li>USD: {calculateTotalMarketCap(data.data.total_volume)}</li>
                <li>
                  Bitcoin (BTC) {priceFormator(data.data.total_volume.btc)}
                </li>
                <li>
                  {" "}
                  Ethereum (ETH) {priceFormator(data.data.total_volume.eth)}
                </li>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="marketCapDistribution">
            <Card className="px-2 py-2 w-[600px]">
              <h3 className="text-[1.2rem] mb-2">
                📊 Market Capitalization Distribution:
              </h3>

              {Object.keys(data.data.market_cap_percentage).map(coin => (
                <div
                  key={coin}
                  className="flex justify-between items-center mt-2 max-w-[400px]  "
                >
                  <span className="mr-2">
                    {" "}
                    {coin.toLocaleUpperCase()}{" "}
                    {data.data.market_cap_percentage[coin].toFixed(2)}%
                  </span>
                  <Progress
                    value={data.data.market_cap_percentage[coin].toFixed(2)}
                    className="w-[60%] "
                  />
                </div>
              ))}
            </Card>
          </TabsContent>
        </Tabs>
      </Card>
      <Card className="w-[100%] px-4 py-4">
        <h3
          className={`scroll-m-20 text-2xl font-semibold tracking-tight mb-5 ${montserrat.className}`}
        >
          Bitcoin Chart :
        </h3>
        <GlobalChart />
      </Card>
    </div>
  )
}
