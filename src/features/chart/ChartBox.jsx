import { defaults } from "chart.js/auto";

import { Line } from "react-chartjs-2";

import DurationButton from "./DurationButton";
function ChartBox({ prices, selected, setSelected, days }) {
  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  const data = {
    labels: prices.map((dataPoint) => getTime(dataPoint[0])),
    datasets: [
      {
        label: "price",
        data: prices.map((dataPoint) => dataPoint[1]),
        borderWith: 1,
        fill: true,
        backgroundColor: "rgba(58, 128, 233, 0.267)",
        borderColor: "#3a80e9",
        tension: 0,
        pointRadius: 0,
      },
    ],
  };
  const durations = ["24H", "1W", "1M", "3M", "6M", "1Y"];

  function getTime(time) {
    const date = new Date(time);
    if (days === 1) {
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${hours}:${minutes}`;
    }

    return date.toLocaleDateString();
  }

  return (
    <div className=" w-full h-[400px] lg:h-[500px] mt-6 mb-20 max-w-7xl mx-auto">
      <div className="flex text-[#acacac] text-xs gap-6 justify-center p-3">
        {durations.map((duration, index) => (
          <DurationButton
            key={duration}
            index={index}
            selected={selected}
            setSelected={setSelected}
          >
            {duration}
          </DurationButton>
        ))}
      </div>
      <Line data={data}></Line>
    </div>
  );
}

export default ChartBox;
