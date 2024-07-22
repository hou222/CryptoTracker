export async function getPrices(id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=6&interval=daily`
  );

  const data = await res.json();
  //console.log(data);
  /* setDate(data.prices.map((dataPoint) => dataPoint[0])); */
  /* console.log(
          new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }).format(timestamp)
        ); */
  //setDetails(data);
  return data.prices;
}
export async function getData(id) {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);

  const data = await res.json();
  //console.log(data);

  //setDetails(data);
  return data;
}
