'use client';

import { useState } from 'react';
import { WalletIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';
import BackButton from '@/components/BackButton';

const paymentMethods = [
  {
    id: 'vodafone',
    name: 'فودافون كاش',
    icon: '📱',
    minAmount: 50,
  },
  {
    id: 'bank',
    name: 'تحويل بنكي',
    icon: '🏦',
    minAmount: 100,
  },
];

export default function WithdrawPage() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const availablePoints = 1000; // This should come from your user context/API

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Validation
    if (!selectedMethod) {
      setError('الرجاء اختيار طريقة السحب');
      setIsSubmitting(false);
      return;
    }

    if (!amount || amount < selectedMethod.minAmount) {
      setError(`الحد الأدنى للسحب هو ${selectedMethod.minAmount} نقطة`);
      setIsSubmitting(false);
      return;
    }

    if (amount > availablePoints) {
      setError('رصيد النقاط غير كافٍ');
      setIsSubmitting(false);
      return;
    }

    if (!phoneNumber || phoneNumber.length < 11) {
      setError('الرجاء إدخال رقم هاتف صحيح');
      setIsSubmitting(false);
      return;
    }

    try {
      // Here you would make an API call to process the withdrawal
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulating API call
      setSuccess(true);
      // Reset form
      setAmount('');
      setPhoneNumber('');
      setSelectedMethod(null);
    } catch (err) {
      setError('حدث خطأ أثناء معالجة الطلب. الرجاء المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-md mx-auto text-center mt-12">
          <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">تم تقديم طلب السحب بنجاح!</h1>
          <p className="text-gray-600 mb-6">سيتم مراجعة طلبك ومعالجته خلال 24 ساعة</p>
          <button
            onClick={() => setSuccess(false)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            طلب سحب جديد
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <BackButton />
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">سحب النقاط</h1>
          <p className="text-gray-600">حول نقاطك إلى أموال حقيقية</p>
        </div>

        {/* Available Balance */}
        <Card className="mb-6 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">الرصيد المتاح</p>
              <p className="text-2xl font-bold">{availablePoints} نقطة</p>
            </div>
            <WalletIcon className="h-8 w-8 text-blue-500" />
          </div>
        </Card>

        {/* Withdrawal Form */}
        <form onSubmit={handleSubmit}>
          {/* Payment Methods */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              اختر طريقة السحب
            </label>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedMethod(method)}
                  className={`p-4 rounded-lg border-2 text-center ${
                    selectedMethod?.id === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="text-2xl mb-1 block">{method.icon}</span>
                  <span className="text-sm font-medium">{method.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              المبلغ (بالنقاط)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="أدخل المبلغ"
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="أدخل رقم الهاتف"
              className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors disabled:bg-blue-300"
          >
            {isSubmitting ? (
              <>
                <ArrowPathIcon className="h-5 w-5 animate-spin" />
                جاري المعالجة...
              </>
            ) : (
              'تأكيد السحب'
            )}
          </button>
        </form>

        {/* Instructions */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">ملاحظات هامة</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• يتم معالجة طلبات السحب خلال 24 ساعة</li>
            <li>• الحد الأدنى للسحب يختلف حسب طريقة السحب</li>
            <li>• تأكد من صحة رقم الهاتف المدخل</li>
            <li>• لا يمكن إلغاء طلب السحب بعد تأكيده</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
