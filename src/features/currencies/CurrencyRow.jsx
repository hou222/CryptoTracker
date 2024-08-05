function CurrencyRow({ handleCoin, data }) {
  return (
    <tr className="p-2  border-b cursor-pointer" onClick={handleCoin}>
      <td className="flex py-3 lg:py-6 items-center gap-3 lg:gap-5 pl-4">
        <img src={data.image} alt="coin" className="w-7 h-7 lg:w-12 lg:h-12" />
        <p className="text-white text-lg lg:text-xl lg:font-semibold">
          {data.name}
        </p>
      </td>

      <td className="font-semibold py-2 w-24 text-start lg:text-end text-white lg:text-xl">
        {data.current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
      <td className="w-20 py-2 ">
        <div
          className={`text-white font-semibold text-sm lg:text-base  ${
            data?.price_change_percentage_24h > 0
              ? "bg-green-600"
              : "bg-red-600"
          } px-2 py-[2px] lg:py-1 lg:px-3 rounded-sm w-fit mx-auto lg:mr-0`}
        >
          {data.price_change_percentage_24h > 0 && "+"}
          {data.price_change_percentage_24h.toFixed(2)}%
        </div>
      </td>
      <td className="font-semibold py-2 w-24 text-start lg:text-end hidden lg:table-cell text-white lg:pr-4 lg:text-xl">
        {data.market_cap.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>
    </tr>
  );
}

export default CurrencyRow;
