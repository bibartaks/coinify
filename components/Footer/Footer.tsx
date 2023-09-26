import React from "react"
import { montserrat, righteous } from "@/app/utilities/fonts"
import Link from "next/link"

import {
  CalendarIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Footer() {
  return (
    <footer className={`bg-secondary font-light ${montserrat.className}`}>
      <div className="max-w-[1400px] m-auto py-4 px-5 mt-5">
        <p className="text-[0.9rem]">
          Crafted with strength 💪 and love 💗 by
          <Link
            className="ml-[-10px] text-1xl text-primary"
            href="bibartaks.com"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link">@bibartaks</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar className="border border-indigo-500">
                    <AvatarImage src="https://github.com/bibartaks.png" />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@bibartaks</h4>
                    <p className="text-sm">
                      Frontend Developer | ✨ Turning Design Dreams into
                      Pixel-Perfect Realities
                    </p>
                    <div className="flex flex-wrap items-start pt-2">
                      <GitHubLogoIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        <Link href="github.com/bibartask">@bibartaks</Link>
                      </span>
                      <LinkedInLogoIcon className=" ml-2 mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground mr-3 mb-2">
                        <Link href="github.com/bibartask">@bibartaks</Link>
                      </span>
                      <PersonIcon className=" mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        <Link href="github.com/bibartask">@bibartaks</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </Link>
        </p>
      </div>
    </footer>
  )
}
