import Image from "next/image"
import { Button } from "@/components/ui/button"
import Landing from "@/components/Landing/Landing"
import Trending from "@/components/Trending/Trending"
import MarketCoins from "@/components/MarketCoins/MarketCoins"
import GlobalInfo from "@/components/GlobalInfo/GlobalInfo"

export default function Home() {
  return (
    <div className="px-5">
      <Landing />
      <GlobalInfo />
      <Trending />
      <MarketCoins />
    </div>
  )
}
