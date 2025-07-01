
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import WinnerCard from "@/components/WinnerCard";

const Draws = () => {
  const draws = [
    {
      views: "7,879",
      drawDate: "Jul 01, 2025 at 01:02 PM"
    },
    {
      views: "20,597", 
      drawDate: "Jun 26, 2025 at 02:05 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="px-4 py-6">
        <h1 className="text-3xl font-black mb-6">DRAWS</h1>
        
        <div className="flex gap-4 mb-6 overflow-x-auto">
          {draws.map((draw, index) => (
            <div key={index} className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative">
                <img 
                  src="/lovable-uploads/ad198cb2-2225-46f8-92b6-85913e263d83.png"
                  alt="Draw"
                  className="w-full h-32 object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                  👁 {draw.views}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500 to-blue-400 opacity-80"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-white text-pink-500 px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    DREAM WIN
                  </div>
                  <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
                    DREAM WIN
                  </div>
                </div>
              </div>
              <div className="p-3">
                <div className="text-sm font-semibold">Draw Date: {draw.drawDate}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mb-6">
          <button className="bg-white px-6 py-3 rounded-full font-bold shadow-sm border-2 border-gray-900">
            PAST DRAWS
          </button>
          <button className="bg-gray-100 px-6 py-3 rounded-full font-bold">
            UPCOMING DRAWS
          </button>
        </div>

        <WinnerCard
          winnerName="Karim Ali"
          amount="AED20,000 Cash"
          campaignId="DC-00516"
          ticketNumber="DC-00516-110029691"
          announcedDate="Jul 01, 2025 at 01:12 PM"
        />
      </main>

      <Navigation />
    </div>
  );
};

export default Draws;
