import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getData, getPrices } from "../services/apiCoin";
import ChartBox from "../features/chart/ChartBox";
//import parse from "html-react-parser";
function CoinDetails() {
  const [details, setDetails] = useState([]);
  const [prices, setPrices] = useState([]);
  const [date, setDate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getInformations() {
      const data = await getData(id);
      if (data) {
        setDetails(data);
        const prices = await getPrices(id);
        setPrices(prices);
        console.log(prices);

        //console.log(getTime(prices[0].at(0)));
      }
    }
    getInformations();
  }, [id]);

  return (
    <div className=" w-full text-white px-4">
      <div className=" flex flex-col items-center gap-4 py-4">
        <img src={details.image?.large} className="w-[180px] h-[180px]" />
        <p className="text-5xl font-bold">BNB</p>
      </div>

      {/* <p className="font-bold text-2xl py-2">
        Current Price: <span className="font-normal">$00,000</span>
      </p>
      <p className="font-bold text-2xl py-2">
        Market Cap: <span className="font-normal">$0,000,000M</span>
      </p> */}

      <ChartBox prices={prices} />
      <div
        className="py-3 h-[100px] overflow-y-scroll "
        dangerouslySetInnerHTML={{
          __html: details.description ? details.description.en : "",
        }}
      ></div>
    </div>
  );
}

export default CoinDetails;
