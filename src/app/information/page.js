'use client';

import Link from 'next/link';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-orange-400 p-4">
        <h1 className="text-xl font-bold text-white text-center">المعلومات</h1>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h2 className="text-lg font-semibold text-right mb-2">المعلومات الشخصية</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">الاسم</span>
              <span className="text-gray-800">same7hammad</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">معرف المستخدم</span>
              <span className="text-gray-800">1112967597</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">VIP المستوى</span>
              <span className="text-gray-800">VIP1</span>
            </div>
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
          <BoltIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">النقاط</span>
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
