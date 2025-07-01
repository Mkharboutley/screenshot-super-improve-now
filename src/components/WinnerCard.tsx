
interface WinnerCardProps {
  winnerName: string;
  amount: string;
  campaignId: string;
  ticketNumber: string;
  announcedDate: string;
}

const WinnerCard = ({ winnerName, amount, campaignId, ticketNumber, announcedDate }: WinnerCardProps) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
      <div className="relative">
        <img 
          src="/lovable-uploads/ad198cb2-2225-46f8-92b6-85913e263d83.png"
          alt="Cash prize"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
            <span className="text-blue-600 text-xs font-bold">DSS</span>
          </div>
        </div>
      </div>

      <div className="p-6 text-center">
        <h2 className="text-3xl font-black mb-2">CONGRATS!</h2>
        <div className="mb-4">
          <span className="text-red-600 font-bold text-xl">{winnerName}</span>
          <span className="text-gray-900 text-xl"> on winning</span>
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-4">{amount}</div>
        
        <div className="text-sm text-gray-600 space-y-1">
          <div>Campaign ID: {campaignId}</div>
          <div>Ticket No: {ticketNumber}</div>
          <div>Announced on: {announcedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
