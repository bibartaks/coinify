import Image from "next/image"
import { Button } from "@/components/ui/button"
import Landing from "@/components/Landing/Landing"
import Trending from "@/components/Trending/Trending"

export default function Home() {
  return (
    <>
      <Landing />
      <Trending />
    </>
  )
}
