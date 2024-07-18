function planCard() {
  return (
    <div className="w-[300px] bg-[#eaedf3] rounded-3xl p-6">
      <div className="flex items-end">
        <p className="text-3xl font-semibold">$19</p>
        <p>/month</p>
      </div>
      <div className="text-3xl font-semibold">Starter</div>
      <p>Unleash the power of automation with strong bench press.</p>
      <ul className="pt-4 flex flex-col gap-1 text-[#808080] ">
        <li className="flex items-center">
          <img src="src/assets/checkW2.png" />
          Multi-step Zaps
        </li>
        <li className="flex items-center">
          <img src="src/assets/checkW2.png" />3 Premium Apps
        </li>
        <li className="flex items-center">
          <img src="src/assets/checkW2.png" />2 Users team
        </li>
        <li className="flex items-center">
          <img src="src/assets/checkW2.png" />
          200mb Space
        </li>
      </ul>
      <button className="bg-[#4b87b8] w-full rounded-full py-[6px] mt-3 text-white">
        Choose plan
      </button>
    </div>
  );
}

export default planCard;
