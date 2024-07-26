import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getData, getPrices } from "../services/apiCoin";
import ChartBox from "../features/chart/ChartBox";
import { ScrollToTop } from "../utils/ScrollToTop";
//import parse from "html-react-parser";
function CoinDetails() {
  const [details, setDetails] = useState([]);
  const [prices, setPrices] = useState([]);
  const [days, setDays] = useState(1);
  const [selected, setSelected] = useState(0);
  const { id } = useParams();
  ScrollToTop();
  const chartDuration = useCallback(() => {
    switch (selected) {
      case 0:
        setDays(1);
        break;
      case 1:
        setDays(7);
        break;
      case 2:
        setDays(30);
        break;
      case 3:
        setDays(90);
        break;
      case 4:
        setDays(180);
        break;
      case 5:
        setDays(365);
    }
  }, [selected]);

  useEffect(() => {
    async function getInformations() {
      const data = await getData(id);
      console.log(data);
      if (data) {
        setDetails(data);
        chartDuration();
        const prices = await getPrices(id, days);
        setPrices(prices);

        //console.log(getTime(prices[0].at(0)));
      }
    }
    getInformations();
  }, [id, days, chartDuration]);
  return (
    <div className=" w-full text-white px-4">
      <div className="lg:flex  lg:justify-between lg:items-center max-w-7xl mx-auto">
        <div className=" flex  items-center gap-1 py-4">
          <img
            src={details.image?.small}
            className="  w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
          />
          <div className=" flex gap-3 items-end ">
            <p className=" text-2xl font-semibold">
              BNB Price
              <span className="text-[#c9c9c9] text-xs px-2">BNB</span>
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-3 lg:gap-6">
          <p className="text-2xl font-semibold lg:text-[#b3b3b3]">
            {details.market_data?.current_price.usd.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <div
            className={`text-white font-semibold text-sm lg:text-base  ${
              details.market_data?.price_change_percentage_24h > 0
                ? "bg-green-600"
                : "bg-red-600"
            } px-2 py-[2px] lg:py-1 lg:px-3 rounded-sm w-fit h-fit lg:mr-0`}
          >
            {details.market_data?.price_change_percentage_24h > 0 && "+"}
            {details.market_data?.price_change_percentage_24h.toFixed(2)}%
          </div>
        </div>
        <div>
          <div className="hidden lg:block text-2xl font-semibold text-[#b3b3b3]">
            {details.market_data?.market_cap.usd.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
      {/* <p className="font-bold text-2xl py-2">
        Current Price: <span className="font-normal">$00,000</span>
      </p>
      <p className="font-bold text-2xl py-2">
        Market Cap: <span className="font-normal">$0,000,000M</span>
      </p> */}

      <ChartBox
        prices={prices}
        selected={selected}
        setSelected={setSelected}
        days={days}
      />
      {/* <div
        className="py-3 h-[100px] overflow-y-scroll "
        dangerouslySetInnerHTML={{
          __html: details.description ? details.description.en : "",
        }}
      ></div> */}
    </div>
  );
}

export default CoinDetails;
