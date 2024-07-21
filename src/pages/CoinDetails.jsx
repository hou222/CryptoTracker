import { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
//import parse from "html-react-parser";
function CoinDetails() {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

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
          "2000",
          "4000",
          "2342",
          "5234",
          "2342",
          "5234",
          "2000",
          "5234",
          "2342",
        ],
      },
    ],
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();
      console.log(data);
      setDetails(data);
    }
    fetchData();
  }, [url]);

  return (
    <div className=" w-full text-white px-4">
      <div className=" flex flex-col items-center gap-4 py-4">
        <img src={details.image?.large} className="w-[180px] h-[180px]" />
        <p className="text-5xl font-bold">BNB</p>
      </div>

      <div
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
      </p>
      {/* <Doughnut data={...}/> */}
      <div className=" w-full bg-red-400 h-[175px] my-6">
        <Line data={data}></Line>
      </div>
    </div>
  );
}

export default CoinDetails;
