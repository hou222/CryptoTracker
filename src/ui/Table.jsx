import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

function Table() {
  return (
    <table className=" w-full ">
      <TableHeader />
      <TableBody />

      {/* <CoinItem /> */}
    </table>
  );
}

export default Table;
