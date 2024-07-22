import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { getData, getPrices } from "../services/apiCoin";
//import parse from "html-react-parser";
function CoinDetails() {
  const [details, setDetails] = useState([]);
  const [prices, setPrices] = useState([]);
  const [date, setDate] = useState([]);
  const { id } = useParams();

  const data = {
    labels: [
      "10:22",
      "10:23",
      "10:11",
      "10:23",
      "10:11",
      "10:11",
      "10:23",
      "10:11",
    ],
    datasets: [
      {
        label: "price",
        data: [
          [1704067241331, 42261.04061756689],
          [1704070847420, 42493.27640875459],
          [1704074443652, 42654.07310665941],
        ],
      },
    ],
  };

  useEffect(() => {
    async function getInformations() {
      const data = await getData(id);
      if (data) {
        setDetails(data);
        const prices = await getPrices(id);
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

      {/* <div
        className="py-3 h-[100px] overflow-y-scroll "
        dangerouslySetInnerHTML={{
          __html: details.description ? details.description.en : "",
        }}
      ></div> 

      <p className="font-bold text-2xl py-2">
        Current Price: <span className="font-normal">$00,000</span>
      </p>
      <p className="font-bold text-2xl py-2">
        Market Cap: <span className="font-normal">$0,000,000M</span>
      </p>*/}

      <div className=" w-full bg-red-400 h-[175px] my-6">
        <Line data={data}></Line>
      </div>
    </div>
  );
}

export default CoinDetails;
