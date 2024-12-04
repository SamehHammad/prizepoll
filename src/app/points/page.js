'use client';

import Link from 'next/link';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

export default function PointsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-orange-400 p-4">
        <h1 className="text-xl font-bold text-white text-center">النقاط</h1>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-t-3xl -mt-4">
        {/* Statistics Grid */}
        <div className="p-6">
          <h2 className="text-right mb-4 text-gray-800">جميع الطلبات</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">عمولة البيع</p>
              <p className="text-xl font-semibold">E£0</p>
              <p className="text-sm text-gray-600 mt-1">تنفيذ</p>
              <p className="text-orange-500">9</p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">عمولة شخصية</p>
              <p className="text-xl font-semibold">E£24</p>
              <p className="text-sm text-gray-600 mt-1">مهمة</p>
              <p className="text-gray-800">12</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">تجميد المبلغ</p>
              <p className="text-xl font-semibold">E£0.00</p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-600 mb-1">الرصيد الحالي</p>
              <p className="text-xl font-semibold">E£204.00</p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full bg-orange-400 text-white py-3 rounded-lg text-lg font-medium mb-6">
            النقاط طلقي
          </button>

          {/* Notes Section */}
          <div className="mt-4">
            <h3 className="text-right mb-2 text-gray-700">ملاحظات</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              notes. After the user selects the order, the platform will synchronously 
              send the order information to the seller. After placing the order, the 
              commission will be automatically deposited into the account. If the user 
              does not pay the order fee within 1 hour, the order will not be blocked on 
              the online shopping platform. When an order is frozen, the order funds are 
              also frozen.
            </p>
          </div>
        </div>
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
          <BoltIcon className="h-6 w-6 text-orange-400" />
          <span className="text-xs mt-1 text-orange-400">النقاط</span>
        </Link>
        <Link href="/arrange" className="flex flex-col items-center">
          <DocumentTextIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">ترتيب</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <UserIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">مركز المستخدم</span>
        </Link>
      </nav>
    </main>
  );
}
