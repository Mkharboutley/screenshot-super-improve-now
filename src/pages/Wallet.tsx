
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import WalletBalance from "@/components/WalletBalance";
import PaymentMethods from "@/components/PaymentMethods";

const Wallet = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Header />
      
      <main className="py-6">
        <div className="flex items-center mb-6 px-4">
          <button className="mr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Wallet</h1>
        </div>

        <WalletBalance />
        <PaymentMethods />
      </main>

      <Navigation />
    </div>
  );
};

export default Wallet;
