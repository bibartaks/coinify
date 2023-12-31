"use client"

import React, { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const GlobalChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily"
        )
        const data = await response.json()
        const prices: number[][] = data.prices
        const timestamps = prices.map(priceData => new Date(priceData[0]))
        const values = prices.map(priceData => priceData[1])
        const formattedDates = timestamps.map(timestamp =>
          timestamp.toLocaleDateString()
        )

        const ctx = chartRef.current?.getContext("2d")

        if (ctx) {
          new Chart(ctx, {
            type: "line",
            data: {
              labels: formattedDates,
              datasets: [
                {
                  label: "Price",
                  data: values,
                  borderColor: "rgba(75, 192, 192, 1)",
                  borderWidth: 2,
                  fill: true,
                  backgroundColor: "rgba(75, 192, 192, 0.2)", // Background color
                  pointRadius: 0,
                },
              ],
            },
            options: {
              responsive: true,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: true,
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                },
              },
            },
          })
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchDataFromApi()
  }, [])

  return <canvas ref={chartRef} />
}

export default GlobalChart
