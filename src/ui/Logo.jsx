import logo from "../assets/logo.png";
function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <img src={logo} alt="logo" />
      <p className="text-[#0094FF] text-lg font-semibold">CoinWave</p>
    </div>
  );
}

export default Logo;