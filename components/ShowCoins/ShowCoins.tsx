"use client"

import React, { useEffect } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

export function ShowCoins() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get("page")
  const show = searchParams.get("show")

  console.log(value)

  useEffect(() => {
    if (value) {
      router.push(`${page ? `?page=${page}&` : ""}show=${value}`, {
        scroll: false,
      })
    }
  }, [page, value, router])

  const showItems = [
    {
      value: "20",
      label: " 20",
    },
    {
      value: "30",
      label: " 30",
    },
    {
      value: "50",
      label: " 50",
    },
    {
      value: "70",
      label: " 70",
    },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <h1 className="ml-5 hidden lg:block xl:block xll:block">Show:</h1>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[70px] justify-between ml-2"
          aria-label="Select how many result you wanna see"
        >
          {value
            ? showItems.find(framework => framework.value === value)?.label
            : show
            ? show
            : showItems[0].value}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100px] p-0">
        <Command>
          <CommandGroup>
            {showItems.map(framework => (
              <CommandItem
                key={framework.value}
                onChange={e => setValue(framework.value)}
                onSelect={currentValue => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <CheckIcon
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
