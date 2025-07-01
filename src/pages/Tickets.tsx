
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const Tickets = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="px-4 py-6">
        <h1 className="text-3xl font-black mb-6">TICKETS</h1>
        
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🎫</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">No Tickets Yet</h2>
          <p className="text-gray-500 mb-6">Purchase tickets to participate in exciting draws!</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Buy Tickets
          </button>
        </div>
      </main>

      <Navigation />
    </div>
  );
};

export default Tickets;
