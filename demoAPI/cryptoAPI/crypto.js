var marketData
async function loadCryptoMarkets() {
  marketData = await $.ajax({url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"})
  console.log(marketData)
  return marketData
}
loadCryptoMarkets()
