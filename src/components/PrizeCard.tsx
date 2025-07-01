
import { Button } from "@/components/ui/button";

interface PrizeCardProps {
  title: string;
  amount: string;
  tickets: string;
  price: string;
  description?: string;
  drawDate?: string;
  campaignId?: string;
  featured?: boolean;
}

const PrizeCard = ({ 
  title, 
  amount, 
  tickets, 
  price, 
  description, 
  drawDate, 
  campaignId,
  featured = false 
}: PrizeCardProps) => {
  return (
    <div className={`rounded-3xl overflow-hidden shadow-lg ${featured ? 'bg-gradient-to-br from-blue-900 to-blue-600' : 'bg-white'} mb-6`}>
      {featured && (
        <div className="bg-yellow-400 text-black px-4 py-2 text-center font-bold">
          PRIZE INCREASED!
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src="/lovable-uploads/ad198cb2-2225-46f8-92b6-85913e263d83.png" 
          alt="Cash prizes"
          className="w-full h-48 object-cover"
        />
        {tickets && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
            {tickets} TICKETS
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-bold">DSS</span>
          </div>
        </div>
      </div>

      <div className={`p-6 ${featured ? 'text-white' : 'text-gray-900'}`}>
        <div className="mb-4">
          <div className={`text-2xl font-bold mb-1 ${featured ? 'text-red-400' : 'text-red-600'}`}>
            Win
          </div>
          <div className="text-3xl font-black">
            {amount}
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="bg-yellow-400 text-black px-4 py-2 rounded-l-full font-bold">
            {price}
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-r-full font-bold flex-1">
            Buy & Enter to Win
          </Button>
        </div>

        {description && (
          <p className={`text-sm mb-4 ${featured ? 'text-gray-200' : 'text-gray-600'}`}>
            {description}
          </p>
        )}

        <div className="flex justify-between text-sm mb-4">
          <button className={`${featured ? 'text-gray-200' : 'text-gray-600'} hover:underline`}>
            More info
          </button>
          <button className={`${featured ? 'text-gray-200' : 'text-gray-600'} hover:underline`}>
            How it works?
          </button>
        </div>

        {drawDate && (
          <div className={`text-center text-sm ${featured ? 'text-gray-200' : 'text-gray-600'}`}>
            Draw Date: {drawDate}
          </div>
        )}

        {campaignId && (
          <div className={`text-center text-xs mt-2 ${featured ? 'text-gray-300' : 'text-gray-500'}`}>
            Campaign ID: {campaignId}
          </div>
        )}
      </div>
    </div>
  );
};

export default PrizeCard;
