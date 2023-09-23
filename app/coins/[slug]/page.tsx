import React from "react"

export default function page({ params }) {
  let { slug } = params
  return <div>page {slug}</div>
}
