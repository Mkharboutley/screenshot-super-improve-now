
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100">
      <div className="flex items-center">
        <div className="bg-black text-white px-3 py-2 rounded-lg font-bold text-lg mr-2">
          D
        </div>
        <span className="font-bold text-xl">DREAM DUBAI</span>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
          Login
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
          <Menu size={20} className="text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
