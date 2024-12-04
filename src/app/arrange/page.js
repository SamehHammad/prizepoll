'use client';

import Link from 'next/link';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

export default function ArrangePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Empty State */}
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <div className="text-center mb-8">
          <p className="text-gray-500 mb-4">لا توجد بيانات</p>
        </div>
        
        {/* Navigation button */}
        <Link 
          href="/points" 
          className="w-[90%] max-w-md bg-orange-400 text-white py-3 rounded-lg text-center font-medium hover:bg-orange-500 transition-colors"
        >
          لفحص
        </Link>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 px-4">
        <Link href="/" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">الصفحة الرئيسية</span>
        </Link>
        <Link href="/recharge" className="flex flex-col items-center">
          <CreditCardIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">إعادة الشحن</span>
        </Link>
        <Link href="/points" className="flex flex-col items-center">
          <BoltIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">النقاط</span>
        </Link>
        <Link href="/arrange" className="flex flex-col items-center">
          <DocumentTextIcon className="h-6 w-6 text-orange-400" />
          <span className="text-xs mt-1 text-orange-400">ترتيب</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <UserIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">مركز المستخدم</span>
        </Link>
      </nav>
    </main>
  );
}
