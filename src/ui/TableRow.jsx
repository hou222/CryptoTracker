import coin from "../assets/turbo.png";

function TableRow() {
  return (
    <tr className="p-2  border-b">
      <td className="flex py-2 items-center gap-3 pl-4">
        <img src={coin} alt="coin" className="w-7 h-7" />
        <p className="text-white text-lg ">Bitcoin</p>
      </td>
      {/* <div className="flex  items-end justify-center gap-1 bg-green-500"> */}
      <td className="font-semibold py-2 w-24 text-start text-white ">
        $69,423.04
      </td>
      <td className="w-20 py-2 ">
        <div className="text-white font-semibold text-sm bg-red-600 px-2 py-[2px] rounded-sm w-fit mx-auto">
          -3.28%
        </div>
      </td>
      {/* </div> */}
    </tr>
  );
}

export default TableRow;
