
import { CreditCard } from "lucide-react";

const PaymentMethods = () => {
  const paymentOptions = [
    {
      icon: "💳",
      title: "BinancePay",
      subtitle: "PAY"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      title: "Credit Card",
      bgColor: "bg-blue-600"
    },
    {
      icon: "💳",
      title: "Voucher Code",
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <div className="px-4">
      <h3 className="text-xl font-bold mb-4 text-gray-900">Top-Up using:</h3>
      <div className="space-y-3">
        {paymentOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-xl ${option.bgColor || 'bg-gray-100'} flex items-center justify-center mr-4`}>
                {typeof option.icon === 'string' ? (
                  <span className="text-2xl">{option.icon}</span>
                ) : (
                  option.icon
                )}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{option.title}</div>
                {option.subtitle && (
                  <div className="text-sm text-gray-600">{option.subtitle}</div>
                )}
              </div>
            </div>
            <div className="text-gray-400">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
