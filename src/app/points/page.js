'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HomeIcon, CreditCardIcon, BoltIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';
import { Card } from '@/components/ui/card';

const adsItems = [
  {
    id: 1,
    title: 'مكافأة إعلانية 1',
    description: 'انقر للحصول على نقاط إضافية',
    points: 100,
  },
  {
    id: 2,
    title: 'مكافأة إعلانية 2',
    description: 'انقر للحصول على نقاط إضافية',
    points: 150,
  },
  {
    id: 3,
    title: 'مكافأة إعلانية 3',
    description: 'انقر للحصول على نقاط إضافية',
    points: 200,
  },
  {
    id: 4,
    title: 'مكافأة إعلانية 4',
    description: 'انقر للحصول على نقاط إضافية',
    points: 250,
  },
];

export default function PointsPage() {
  const [selectedAd, setSelectedAd] = useState(null);
  const [isAdLoaded, setIsAdLoaded] = useState(false);

  useEffect(() => {
    if (selectedAd) {
      setIsAdLoaded(false);
      const timer = setTimeout(() => {
        try {
          const adElement = document.querySelector('.adsbygoogle');
          if (adElement && window.adsbygoogle) {
            adElement.innerHTML = '';
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        } catch (error) {
          console.error('Error loading ad:', error);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [selectedAd]);

  const handleAdClick = (ad) => {
    setSelectedAd(ad);
  };

  const closeAdPopup = () => {
    setSelectedAd(null);
    setIsAdLoaded(false);
  };

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

          {/* Ads Section */}
          <div className="mt-8">
            <h2 className="text-right mb-4 text-gray-800">اربح نقاط إضافية</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {adsItems.map((ad) => (
                <Card
                  key={ad.id}
                  className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => handleAdClick(ad)}
                >
                  <div className="space-y-2 text-right">
                    <h2 className="text-lg font-semibold">{ad.title}</h2>
                    <p className="text-gray-600">{ad.description}</p>
                    <p className="text-orange-500 font-medium">+{ad.points} نقطة</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ad Popup */}
      {selectedAd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeAdPopup}>
          <div className="bg-white rounded-lg w-full max-w-md p-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeAdPopup}
              className="absolute top-2 left-2 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ✕
            </button>
            <div className="text-right mb-4">
              <h2 className="text-xl font-semibold">{selectedAd.title}</h2>
              <p className="text-gray-600 mb-2">{selectedAd.description}</p>
              <p className="text-orange-500 font-medium">+{selectedAd.points} نقطة</p>
            </div>
            <div className="mt-4 bg-gray-50 rounded-lg flex items-center justify-center relative" style={{ minHeight: '250px' }}>
              {!isAdLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                  <div className="text-center text-gray-500">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
                    <p>جاري تحميل الإعلان...</p>
                  </div>
                </div>
              )}
              <div style={{ width: '300px', height: '250px' }}>
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block', width: '300px', height: '250px' }}
                  data-ad-client="ca-pub-6928751647092861"
                  data-ad-slot="1994234353"
                  data-ad-format="rectangle"
                  data-full-width-responsive="false"
                  onLoad={() => setIsAdLoaded(true)}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <button 
                className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors"
                onClick={closeAdPopup}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

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
