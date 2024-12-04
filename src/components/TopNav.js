'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoReloadCircle } from 'react-icons/io5';
import { FaMoneyBillWave } from 'react-icons/fa';
import { IoGiftSharp } from 'react-icons/io5';
import { IoPersonCircle } from 'react-icons/io5';

export default function TopNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'الجمعية', href: '/community', icon: <IoPersonCircle size={24} /> },
    { name: 'دعوة', href: '/invite', icon: <IoGiftSharp size={24} /> },
    { name: 'الانسحاب', href: '/withdraw', icon: <FaMoneyBillWave size={24} /> },
    { name: 'إعادة الشحن', href: '/recharge', icon: <IoReloadCircle size={24} /> },
  ];

  return (
    <div className="bg-[#F97316]">
      <div className="overflow-x-auto">
        <div className="flex justify-between items-center px-4 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center"
              >
                <span className="text-white mb-1">
                  {item.icon}
                </span>
                <span className="text-white text-xs">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}