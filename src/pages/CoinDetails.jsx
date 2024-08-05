import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getData, getPrices } from "../services/apiCoin";
import ChartBox from "../features/chart/ChartBox";
import { ScrollToTop } from "../utils/ScrollToTop";
import ChartRowDetails from "../features/chart/ChartRowDetails";
import LoadingDetails from "../features/chart/LoadingDetails";
import ChartLoading from "../features/chart/ChartLoading";

function CoinDetails() {
  const [details, setDetails] = useState([]);
  const [prices, setPrices] = useState([]);
  const [days, setDays] = useState(1);
  const [selected, setSelected] = useState(0);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
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
    setIsLoading1(true);
    setIsLoading2(true);
    async function getInformations() {
      const data = await getData(id);
      if (data) {
        setDetails(data);
        setIsLoading1(false);
        chartDuration();
        const prices = await getPrices(id, days);
        setPrices(prices);
        setIsLoading2(false);
      }
    }
    getInformations();
  }, [id, days, chartDuration]);
  return (
    <div className=" w-full text-white px-4">
      {isLoading1 ? <LoadingDetails /> : <ChartRowDetails details={details} />}

      {isLoading2 ? (
        <ChartLoading />
      ) : (
        <ChartBox
          prices={prices}
          selected={selected}
          setSelected={setSelected}
          days={days}
        />
      )}
    </div>
  );
}

export default CoinDetails;
