function CoinDetails() {
  return (
    <div className=" w-full h-screen text-white px-4">
      <div className=" flex flex-col items-center gap-4 py-4">
        <img src="src/assets/turbo.png" className="w-[180px] h-[180px]" />
        <p className="text-5xl font-bold">BNB</p>
      </div>
      <p className="py-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
        cumque quibusdam. Culpa magnam veritatis earum sint qui itaque deleniti
      </p>
      <p className="font-bold text-2xl py-2">
        Current Price: <span className="font-normal">$22,324</span>
      </p>
      <p className="font-bold text-2xl py-2">
        Market Cap: <span className="font-normal">$2,233,324M</span>
      </p>
      <div className="bg-blue-400 w-full h-[150px] my-6"></div>
    </div>
  );
}

export default CoinDetails;
