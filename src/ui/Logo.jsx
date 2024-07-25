import logo from "../assets/logo.png";
function Logo({ handleNavigate }) {
  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={handleNavigate}
    >
      <img src={logo} alt="logo" />
      <p className="text-[#0094FF] text-lg font-semibold">CoinWave</p>
    </div>
  );
}

export default Logo;
