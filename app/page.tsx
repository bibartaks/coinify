import GlobalInfo from "@/components/GlobalInfo/GlobalInfo";
import Landing from "@/components/Landing/Landing";
import MarketCoins from "@/components/MarketCoins/MarketCoins";
import Trending from "@/components/Trending/Trending";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <div className="px-5">
        <Landing />
        <GlobalInfo />
        <Trending />
        <MarketCoins />
      </div>
    </Suspense>
  );
}
