'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { RiFileList2Fill } from 'react-icons/ri';
import { IoDocumentTextSharp } from 'react-icons/io5';
import { BsArrowDownUp } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'الصفحة الرئيسية', icon: <AiFillHome size={24} />, href: '/vip' },
    { name: 'إعادة الشحن', icon: <RiFileList2Fill size={24} />, href: '/recharge' },
    { name: 'نقاط', icon: <IoDocumentTextSharp size={28} />, href: '/points', isMiddle: true },
    { name: 'ترتيب', icon: <BsArrowDownUp size={24} />, href: '/ranking' },
    { name: 'مركز المستخدم', icon: <FaUser size={24} />, href: '/user' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-10">
      <div className="flex justify-between items-center h-16 relative">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
            (pathname === '/' && item.href === '/vip');
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full ${
                item.isMiddle ? '-mt-8' : ''
              }`}
            >
              <span
                className={`transition-colors ${
                  item.isMiddle
                    ? 'bg-[#F97316] p-4 rounded-full shadow-lg -mt-2 text-white'
                    : isActive
                    ? 'text-[#F97316]'
                    : 'text-gray-400'
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xs mt-1 ${
                  isActive ? 'text-[#F97316] font-semibold' : 'text-gray-500'
                } ${item.isMiddle ? 'mt-3' : ''}`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
