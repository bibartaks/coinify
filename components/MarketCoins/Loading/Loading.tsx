import { Skeleton } from "@/components/ui/skeleton"
import { Avatar } from "@radix-ui/react-avatar"
import React from "react"

export default function Loading() {
  return (
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
        {/* <td className="text-left py-4 border-b border-secondary">
          <div className="w-[100px]">
            <Skeleton className="h-7 w-[120px]" />
          </div>
        </td> */}
      </tr>
    </tbody>
  )
}
