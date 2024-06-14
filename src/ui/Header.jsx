import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="bg-black py-4 px-6 text-white flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" />
        <p className="text-[#0094FF] text-lg font-semibold">CoinWave</p>
      </div>
      <div className="flex gap-2 items-center">
        <button className="bg-[#0094FF] px-3 py-[6px] rounded-md text-xs font-semibold text-black cursor-pointer">
          Try if free
        </button>
        <button className="w-6 h-6 bg-white">M</button>
      </div>
    </div>
  );
}

export default Header;
