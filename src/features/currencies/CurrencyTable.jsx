import { useNavigate } from "react-router-dom";
import CurrencyRow from "./CurrencyRow";
import { useEffect, useState } from "react";

function CurrencyTable({ page }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_24h&per_page=5&page=${page}&sparkline=false&locale=en`;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setData(data);
    }
    fetchData();
  }, []);
  function handleCoin() {
    navigate("/coindetails");
  }
  //console.log(data);
  return (
    <table className=" w-full ">
      <thead className="bg-gradient-to-r from-blue-500 to-cyan-500">
        <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white  text-lg lg:text-xl">
          <th className="font-semibold pl-4 py-2 lg:py-4 text-start  border-transparent  ">
            coin
          </th>
          <th className="font-semibold border-transparent w-24 lg:w-1/4 text-start lg:text-end  ">
            price
          </th>
          <th className="font-semibold border-transparent w-20 lg:w-1/4 text-start lg:text-end ">
            24h %
          </th>
          <th className=" font-semibold hidden lg:table-cell  border-transparent  text-start lg:text-end lg:w-1/4 lg:pr-4">
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.length > 0 &&
          data.map((data) => (
            <CurrencyRow handleCoin={handleCoin} data={data} key={data.id} />
          ))}
        {/* <CurrencyRow handleCoin={handleCoin} />
        <CurrencyRow handleCoin={handleCoin} /> */}
      </tbody>
    </table>
  );
}

export default CurrencyTable;
