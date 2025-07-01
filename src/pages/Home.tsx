
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import PrizeCard from "@/components/PrizeCard";
import WinnerCard from "@/components/WinnerCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="px-4 py-6">
        <PrizeCard
          title="PRIZE INCREASED!"
          amount="AED5,000,000 Cash"
          tickets="5x TICKETS"
          price="AED50"
          description="*Use your Credit to shop at Modesh"
          drawDate="30 October, 2025 or earlier"
          campaignId="DC-00518"
          featured={true}
        />

        <WinnerCard
          winnerName="Luisa Sapon"
          amount="AED10,000 Cash"
          campaignId="DC-00518"
          ticketNumber="DC-00518-110250633"
          announcedDate="Jul 01, 2025 at 01:09 PM"
        />

        <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-3xl p-8 text-white text-center mb-6">
          <div className="text-4xl font-black mb-2">GET 50%</div>
          <div className="text-4xl font-black mb-4">CASHBACK</div>
          <div className="text-lg mb-6">ON YOUR FIRST PURCHASE</div>
          <div className="text-3xl font-black mb-6">SIGN-UP NOW</div>
          
          <div className="space-y-3">
            <button className="w-full bg-green-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-green-600 transition-colors">
              <span className="text-2xl">📱</span>
              Tap here to Sign-up
            </button>
            <button className="w-full bg-white text-gray-900 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors">
              <span className="text-2xl">💬</span>
              Login/Sign-up via SMS
            </button>
          </div>
        </div>

        <PrizeCard
          amount="AED10,000 Cash"
          price="AED10"
          description="*Use your Credit to shop at Modesh"
          drawDate="17 July, 2025 or earlier"
          campaignId="DW-00054"
        />
      </main>

      <Navigation />
    </div>
  );
};

export default Home;
