import FilterPlans from "../features/plans/FilterPlans";
import CryptoPrices from "../ui/CryptoPrices";
import Hero from "../ui/Hero";

function Home() {
  return (
    <main>
      <Hero />
      <div className=" px-4 py-4 ">
        <CryptoPrices />
        <FilterPlans />
      </div>
    </main>
  );
}

export default Home;
