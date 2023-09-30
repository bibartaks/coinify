export default function priceFormator(price: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2, // Ensures two decimal places
    maximumFractionDigits: 2, // Ensures two decimal places
  })

  // Format the price as a currency string
  // const formattedPrice = formatter.format(price)

  // Remove the last two characters (the decimal point and the zeros)
  // const trimmedPrice = formattedPrice.slice(0, -3)

  // return trimmedPrice
  return formatter.format(price)
}
