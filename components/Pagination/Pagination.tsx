"use client"

import React, { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"

export default function Pagination() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get("page")
  const show = searchParams.get("show")

  const [page, setPage] = useState(search ? parseInt(search) : 1)

  // const scrollTop = () => {
  //   window.scrollTo({ top: 1300, behavior: "smooth" })
  // }

  useEffect(() => {
    router.push(`?page=${page}${show ? `&show=${show}` : ""}`, {
      scroll: false,
    })
  }, [page, show, router])

  function nextPage() {
    setPage(page + 1)
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <>
      <Button variant="outline" className="mr-5" onClick={prevPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
          />
        </svg>
      </Button>
      <span className="mr-5">Page: {page}</span>
      <Button variant="outline" onClick={nextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill=""
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
          />
        </svg>
      </Button>
    </>
  )
}
