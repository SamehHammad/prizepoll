'use client';

import { BiSupport } from 'react-icons/bi';
import { FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { MdAccountBalance } from 'react-icons/md';

const Header = () => {

  const menuItems = [
    { name:'service', icon: <BiSupport size={20} /> },
    { name:'withdraw', icon: <FaMoneyBillWave size={20} /> },
    { name:'invite', icon: <AiOutlineUserAdd size={20} /> },
    { name:'recharge', icon: <MdAccountBalance size={20} /> },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex justify-between items-center px-4 py-3">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="text-gray-500 group-hover:text-orange-500 transition-colors">
              {item.icon}
            </div>
            <span className="text-xs mt-1 text-gray-600 group-hover:text-orange-500">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
