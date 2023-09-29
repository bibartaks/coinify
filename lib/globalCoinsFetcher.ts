export default async function globalCoinsFetcher(url: string) {
  const res = fetch(url)
  return (await res).json()
}
