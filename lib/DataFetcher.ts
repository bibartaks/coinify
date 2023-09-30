export default async function getTrendingCoinData(url: string) {
  const res = await fetch(url, { next: { revalidate: 86400 } })
  return res.json()
}
