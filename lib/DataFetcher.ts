export default async function getTrendingCoinData(url: string) {
  const res = await fetch(url)
  return res.json()
}
