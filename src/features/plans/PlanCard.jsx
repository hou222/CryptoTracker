import check from "../../assets/checkW2.png";

function planCard({ plans }) {
  return (
    <div className="w-[300px] bg-[#eaedf3] rounded-3xl p-6">
      <div className="flex items-end">
        <p className="text-3xl font-semibold">${plans ? "19" : "70"}</p>
        <p>/month</p>
      </div>
      <div className="text-3xl font-semibold">Starter</div>
      <p>Unleash the power of automation with strong bench press.</p>
      <ul className="pt-4 flex flex-col gap-1 text-[#808080] ">
        <li className="flex items-center">
          <img src={check} />
          Multi-step Zaps
        </li>
        <li className="flex items-center">
          <img src={check} />3 Premium Apps
        </li>
        <li className="flex items-center">
          <img src={check} />2 Users team
        </li>
        <li className="flex items-center">
          <img src={check} />
          200mb Space
        </li>
      </ul>
      <button className="bg-[#4b87b8] w-full rounded-full py-[6px] mt-3 text-white">
        Choose plan
      </button>
    </div>
  );
}

export default planCard;
