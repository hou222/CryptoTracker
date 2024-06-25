import Header from "./Header";
import Hero from "./Hero";

function AppLayout() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <div className="bg-red-400">
        <div className="bg-green-500 max-w-7xl mx-auto">
          <p className="text-white">Crypto Prices</p>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
