import CurrencyRow from "./CurrencyRow";

function currencyTable() {
  return (
    <table className=" w-full ">
      <thead className="bg-gradient-to-r from-blue-500 to-cyan-500">
        <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white  text-lg lg:text-xl">
          <th className="font-semibold pl-4 py-2 lg:py-4 text-start  border-transparent  ">
            coin
          </th>
          <th className="font-semibold border-transparent w-24 lg:w-1/4 text-start lg:text-end  ">
            price
          </th>
          <th className="font-semibold border-transparent w-20 lg:w-1/4 text-start lg:text-end ">
            24h %
          </th>
          <th className=" font-semibold hidden lg:table-cell  border-transparent  text-start lg:text-end lg:w-1/4 lg:pr-4">
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody>
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
        <CurrencyRow />
      </tbody>
    </table>
  );
}

export default currencyTable;
