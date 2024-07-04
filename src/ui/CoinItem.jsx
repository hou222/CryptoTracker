import coin from "../assets/turbo.png";

function CoinItem() {
  return (
    <div className=" px-2 py-2 flex justify-between items-center border-b">
      <div className="flex items-center gap-3">
        <img src={coin} alt="coin" className="w-8 h-8" />
        <p className="text-white text-lg">Bitcoin</p>
      </div>
      <div className="flex flex-col items-end justify-center gap-1">
        <div className="font-semibold text-white">$69,423.04</div>
        <div className="text-white font-semibold text-sm bg-red-600 w-fit px-2 py-[2px] rounded-sm">
          -3.28%
        </div>
      </div>
    </div>
  );
}

export default CoinItem;
