export default async function globalCoinsFetcher(url) {
  const res = fetch(url)
  return (await res).json()
}
