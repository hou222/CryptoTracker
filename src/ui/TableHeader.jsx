function TableHeader() {
  return (
    <thead className="bg-gradient-to-r from-blue-500 to-cyan-500">
      <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white  text-lg ">
        <th className="font-semibold pl-4 py-2 text-start border-transparent  ">
          coin
        </th>
        <th className="font-semibold border-transparent w-24 text-start border-red-500 ">
          price
        </th>
        <th className="font-semibold border-transparent w-20 text-start">
          24h %
        </th>

        {/* <div className="flex bg-red-400">
<th>price</th>
<th>24h %</th>
</div> */}
      </tr>
    </thead>
  );
}

export default TableHeader;
