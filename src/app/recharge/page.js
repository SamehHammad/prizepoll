'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

export default function PointsPage() {
  const amounts = [100, 200, 300, 500, 1000, 2000, 3000, 5000, 8000, 20000, 50000, 100000];
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAmountClick = (selectedAmount) => {
    setAmount(selectedAmount.toString());
  };

  const handleAmountChange = (e) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  };

  const handleSubmit = async () => {
    if (!amount) {
      alert('Please enter an amount');
      return;
    }

    try {
      setLoading(true);
      // TODO: Implement your recharge API call here
      console.log('Submitting amount:', amount);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Recharge request submitted successfully');
      setAmount('');
    } catch (error) {
      console.error('Error submitting recharge:', error);
      alert('Failed to submit recharge request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-orange-400 pb-20">
      <div className="p-6 text-white">
        <h1 className="text-4xl font-bold text-right">E£204.00</h1>
        <p className="text-right mt-1 text-sm">الرصيد</p>
      </div>

      <div className="bg-white rounded-t-3xl p-6">
        <p className="text-right mb-2 text-gray-700">الرجاء إدخال المبلغ</p>
        <input
          type="text"
          className="w-full p-3 border border-gray-200 rounded-lg mb-4 text-right text-lg"
          placeholder="E£"
          value={amount}
          onChange={handleAmountChange}
        />
        
        <p className="text-gray-400 text-xs leading-relaxed mb-6">
          Due to the large number of people recharging in the mall, if the recharging fails, 
          please choose another recharging channel to re-acquire the account recharging. 
          Every time you recharge, you need to re-acquire the latest account in the mall. 
          Please do not save the account to recharge. Please submit the 12-digit UTR after 
          depositing.
        </p>

        <p className="text-right mb-4 text-gray-700">حدد المبلغ بسرعة</p>

        <div className="grid grid-cols-3 gap-3">
          {amounts.map((amt) => (
            <button
              key={amt}
              className={`py-3 px-4 rounded-lg text-center transition-colors ${
                amount === amt.toString()
                  ? 'bg-orange-100 text-orange-600'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
              onClick={() => handleAmountClick(amt)}
            >
              {amt}
            </button>
          ))}
        </div>

        <p className="mt-6 mb-6 text-gray-600">Akpayvip</p>

        <button 
          className="w-full bg-orange-400 text-white py-4 rounded-lg text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={loading || !amount}
        >
          {loading ? 'Processing...' : 'إرسل'}
        </button>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 px-4">
        <Link href="/" className="flex flex-col items-center">
          <HomeIcon className="h-6 w-6 text-gray-600" />
          <span className="text-xs mt-1 text-gray-600">الصفحة الرئيسية</span>
        </Link>
        <Link href="/recharge" className="flex flex-col items-center">
          <CreditCardIcon className="h-6 w-6 text-orange-400" />
          <span className="text-xs mt-1 text-orange-400">إعادة الشحن</span>
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
