import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table() {
  return (
    <table className=" w-full ">
      <TableHeader />
      <TableBody />
      <tfoot className="bg-green-400">
        <tr className="flex bg-red-400 ">
          <div className="w-7 h-7 bg-white rounded-full text-center">1</div>
          <div className="w-7 h-7 bg-white rounded-full text-center">1</div>
          <div className="w-7 h-7 bg-white rounded-full text-center">1</div>
        </tr>
      </tfoot>
      {/* <CoinItem /> */}
    </table>
  );
}

export default Table;
