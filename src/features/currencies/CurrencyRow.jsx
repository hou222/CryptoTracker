import coin from "../../assets/turbo.png";

function CurrencyRow({ handleCoin }) {
  return (
    <tr className="p-2  border-b" onClick={handleCoin}>
      <td className="flex py-3 lg:py-6 items-center gap-3 lg:gap-5 pl-4">
        <img src={coin} alt="coin" className="w-7 h-7 lg:w-12 lg:h-12" />
        <p className="text-white text-lg lg:text-xl lg:font-semibold">
          Bitcoin
        </p>
      </td>
      {/* <div className="flex  items-end justify-center gap-1 bg-green-500"> */}
      <td className="font-semibold py-2 w-24 text-start lg:text-end text-white lg:text-xl">
        $69,423.04
      </td>
      <td className="w-20 py-2 ">
        <div className="text-white font-semibold text-sm lg:text-base  bg-red-600 px-2 py-[2px] lg:py-1 lg:px-3 rounded-sm w-fit mx-auto lg:mr-0">
          -3.28%
        </div>
      </td>
      <td className="font-semibold py-2 w-24 text-start lg:text-end hidden lg:table-cell text-white lg:pr-4 lg:text-xl">
        $69,887,878,423.04
      </td>
      {/* </div> */}
    </tr>
  );
}

export default CurrencyRow;
