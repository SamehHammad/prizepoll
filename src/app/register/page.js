'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EnvelopeIcon, LockClosedIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    inviteCode: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    router.push('/login');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-300 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 my-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">إنشاء حساب جديد</h1>
          <p className="text-gray-600">أدخل بياناتك للتسجيل</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-right text-gray-700 text-sm font-medium mb-2">
              الاسم
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right"
                placeholder="أدخل اسمك"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-right text-gray-700 text-sm font-medium mb-2">
              البريد الإلكتروني
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right"
                placeholder="أدخل بريدك الإلكتروني"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-right text-gray-700 text-sm font-medium mb-2">
              رقم الهاتف
            </label>
            <div className="relative">
              <input
                type="tel"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right"
                placeholder="أدخل رقم هاتفك"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
              <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-right text-gray-700 text-sm font-medium mb-2">
              كلمة المرور
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right"
                placeholder="أدخل كلمة المرور"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-right text-gray-700 text-sm font-medium mb-2">
              تأكيد كلمة المرور
            </label>
            <div className="relative">
              <input
                type="password"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right"
                placeholder="أعد إدخال كلمة المرور"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          <div>
            <label className="block text-right text-gray-700 text-sm font-medium mb-2">
              رمز الدعوة (اختياري)
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent text-right"
              placeholder="أدخل رمز الدعوة"
              value={formData.inviteCode}
              onChange={(e) => setFormData({ ...formData, inviteCode: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-end mt-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="mr-2 text-sm text-gray-600">
              أوافق على الشروط والأحكام
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
          >
            إنشاء حساب
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            لديك حساب بالفعل؟{' '}
            <Link href="/login" className="text-orange-500 hover:text-orange-600 font-medium">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
