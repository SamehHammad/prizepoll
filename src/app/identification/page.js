'use client';

import Link from 'next/link';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

export default function IdentificationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-orange-400 p-4">
        <h1 className="text-xl font-bold text-white text-center">التعريف</h1>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="space-y-4">
            <div className="text-right">
              <h2 className="text-lg font-semibold mb-2">معلومات التعريف</h2>
              <p className="text-sm text-gray-600">يرجى إكمال معلومات التعريف الخاصة بك</p>
            </div>
            <button className="w-full bg-orange-400 text-white py-3 rounded-lg">
              إضافة معلومات التعريف
            </button>
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
