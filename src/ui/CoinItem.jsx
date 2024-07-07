import coin from "../assets/turbo.png";

function CoinItem() {
  return (
    <div className=" px-2 py-2 flex justify-between items-center border-b">
      <div className="flex bg-yellow-300 items-center gap-3">
        <img src={coin} alt="coin" className="w-8 h-8" />
        <p className="text-white text-lg ">Bitcoin</p>
      </div>
      <div className="flex  items-end justify-center gap-1 bg-green-500">
        <div className="font-semibold text-white w-">$69,423.04</div>
        <div className="text-white font-semibold text-sm bg-red-600 px-2 py-[2px] rounded-sm w-1/3">
          -3.28%
        </div>
      </div>
    </div>
  );
}

export default CoinItem;
