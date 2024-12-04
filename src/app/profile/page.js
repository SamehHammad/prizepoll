'use client';

import Link from 'next/link';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon, UserCircleIcon, BellIcon, ShieldCheckIcon, UsersIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline';

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-orange-400 pb-20">
      {/* User Info Section */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex-1">
          <button className="bg-orange-300 text-white px-4 py-2 rounded-lg text-sm">
            نسخ الرابط
          </button>
        </div>
        <div className="flex flex-col items-end flex-1">
          <h2 className="text-white font-bold text-xl mb-1">1112967597</h2>
          <p className="text-white mb-1">VIP1</p>
          <p className="text-white text-sm">FCZRLT رمز الدعوة</p>
        </div>
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
          <UserCircleIcon className="w-12 h-12 text-gray-400" />
        </div>
      </div>

      {/* Balance Card */}
      <div className="mx-4 bg-white rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">درجة الائتمان</p>
          <p className="text-gray-600">الرصيد</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-2xl font-bold">100</p>
          <p className="text-2xl font-bold">E£204.00</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-400 text-white py-2 rounded-lg">
            الأرشيف
          </button>
          <button className="flex-1 bg-orange-400 text-white py-2 rounded-lg">
            إعادة الشحن
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-4 bg-white rounded-lg p-4 mb-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-1">
              <ClipboardDocumentIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">تفاصيل الفاتورة</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-1">
              <DocumentTextIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">تفاصيل المعاملة</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-1">
              <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">محجوبة</span>
          </div>
        </div>
      </div>

      {/* Service Center */}
      <div className="mx-4 bg-white rounded-lg p-4">
        <h3 className="text-lg font-medium mb-4 text-right">مركز الخدمة</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-1">
              <UserIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">المعلومات الشخصية</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-1">
              <ClipboardDocumentIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">التعريف</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-1">
              <BellIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">المعلومات</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-1">
              <UsersIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">دعوة الأصدقاء</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-1">
              <DocumentTextIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">دعوة المهمة</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-1">
              <ShieldCheckIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">أمن</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 px-4">
        <Link href="/" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">الصفحة الرئيسية</span>
        </Link>
        <Link href="/recharge-record" className="flex flex-col items-center">
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
          <UserIcon className="h-6 w-6 text-orange-400" />
          <span className="text-xs mt-1 text-orange-400">مركز المستخدم</span>
        </Link>
      </nav>
    </main>
  );
}
