"use client"

import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement, // Register the "point" element
  LineElement,
  Title,
  Tooltip,
  Legend
)

function calculateTrend(apiData: any) {
  const isPositiveTrend = apiData[apiData.length - 1] >= apiData[0]
  const borderColor = isPositiveTrend ? "green" : "red"
  const backgroundColor = isPositiveTrend
    ? "rgba(0, 255, 0, 0.5)"
    : "rgba(255, 0, 0, 0.5)"
  return { borderColor, backgroundColor }
}

export default function Chart({ chartData }: any) {
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false, // Hide x-axis labels
      },
      y: {
        display: false, // Hide y-axis labels
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false,
      },
    },
  }

  // Sample labels (you can customize these)
  const labels = chartData

  const apiData = chartData

  const { borderColor, backgroundColor } = calculateTrend(chartData)

  const data = {
    labels: labels.slice(0, apiData.length), // Match labels to data length
    datasets: [
      {
        label: "Price",
        data: apiData,
        // data: chartData,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        pointStyle: "none",
        pointRadius: 0,
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="h-[70px]">
      <Line options={options} data={data} />
    </div>
  )
}
