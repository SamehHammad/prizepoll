'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  CreditCardIcon,
  BoltIcon,
  DocumentTextIcon,
  UserIcon,
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  UsersIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';

export default function ProfilePage() {
  const router = useRouter();

  const handleCopyLink = () => {
    navigator.clipboard.writeText('FCZRLT');
    alert('تم نسخ الرمز بنجاح');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-300 pb-20">
      {/* User Info Section */}
      <div className="p-6 flex items-center justify-between bg-white shadow-md rounded-b-3xl">
        <div className="flex-1">
          <button 
            onClick={handleCopyLink}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm shadow-md transition"
          >
            نسخ الرابط
          </button>
        </div>
        <div className="flex flex-col items-end flex-1">
          <h2 className="text-gray-800 font-bold text-xl mb-1">1112967597</h2>
          <p className="text-gray-600 text-sm mb-1">VIP1</p>
          <p className="text-gray-600 text-xs">FCZRLT رمز الدعوة</p>
        </div>
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-md">
          <UserCircleIcon className="w-12 h-12 text-orange-500" />
        </div>
      </div>

      {/* Balance Card */}
      <div className="mx-4 bg-white rounded-lg p-6 shadow-md mt-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-500">درجة الائتمان</p>
          <p className="text-gray-500">الرصيد</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <p className="text-3xl font-bold text-gray-800">100</p>
          <p className="text-3xl font-bold text-gray-800">E£204.00</p>
        </div>
        <div className="flex gap-4">
          <Link href="/archive" className="flex-1">
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition">
              الأرشيف
            </button>
          </Link>
          <Link href="/recharge" className="flex-1">
            <button className="w-full bg-orange-500 text-white py-2 rounded-lg shadow-md hover:bg-orange-600 transition">
              إعادة الشحن
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mx-4 bg-white rounded-lg p-6 shadow-md mt-6">
        <div className="grid grid-cols-3 gap-6">
          <Link href="/billing" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <ClipboardDocumentIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">تفاصيل الفاتورة</span>
          </Link>
          <Link href="/transactions" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <DocumentTextIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">تفاصيل المعاملة</span>
          </Link>
          <Link href="/security" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <ShieldCheckIcon className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-sm text-gray-600">محجوبة</span>
          </Link>
        </div>
      </div>

      {/* Service Center */}
      <div className="mx-4 bg-white rounded-lg p-6 shadow-md mt-6">
        <h3 className="text-lg font-medium mb-4 text-gray-800 text-right">مركز الخدمة</h3>
        <div className="grid grid-cols-3 gap-6">
          <Link href="/information" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <UserIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">المعلومات الشخصية</span>
          </Link>
          <Link href="/identification" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <ClipboardDocumentIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">التعريف</span>
          </Link>
          <Link href="/notifications" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <BellIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">المعلومات</span>
          </Link>
          <Link href="/invite-friends" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <UsersIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">دعوة الأصدقاء</span>
          </Link>
          <Link href="/tasks" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <DocumentTextIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">دعوة المهمة</span>
          </Link>
          <Link href="/security" className="flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 shadow-md">
              <ShieldCheckIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">أمن</span>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-3 shadow-md">
        <Link href="/" className="flex flex-col items-center text-gray-500">
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs mt-1">الصفحة الرئيسية</span>
        </Link>
        <Link href="/recharge" className="flex flex-col items-center text-gray-500">
          <CreditCardIcon className="h-6 w-6" />
          <span className="text-xs mt-1">إعادة الشحن</span>
        </Link>
        <Link href="/points" className="flex flex-col items-center text-gray-500">
          <BoltIcon className="h-6 w-6" />
          <span className="text-xs mt-1">النقاط</span>
        </Link>
        <Link href="/arrange" className="flex flex-col items-center text-gray-500">
          <DocumentTextIcon className="h-6 w-6" />
          <span className="text-xs mt-1">ترتيب</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-orange-500">
          <UserIcon className="h-6 w-6" />
          <span className="text-xs mt-1">مركز المستخدم</span>
        </Link>
      </nav>
    </main>
  );
}
