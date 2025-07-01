
import { Home, CreditCard, Gift, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: CreditCard, label: "Draws", path: "/draws" },
    { icon: Gift, label: "Tickets", path: "/tickets" },
    { icon: User, label: "Wallet", path: "/wallet" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive 
                    ? "text-blue-600" 
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-xs mt-1 font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
      </div>
    </nav>
  );
};

export default Navigation;
