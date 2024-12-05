'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import BackButton from '@/components/BackButton';

// Simple icon components
const ShareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
  </svg>
);

const UserPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
  </svg>
);

const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

export default function InvitePage() {
  const [copied, setCopied] = useState(false);
  const inviteCode = 'PRIZEPOLL2024';
  const referralLink = `https://prizepoll.com/register?ref=${inviteCode}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'انضم إلى PrizePoll',
          text: 'انضم إلي في PrizePoll واحصل على مكافآت رائعة!',
          url: referralLink,
        });
      } catch (err) {
        console.error('Share failed:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <BackButton />
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">دعوة الأصدقاء</h1>
          <p className="text-gray-600">ادعُ أصدقاءك واربح نقاطًا إضافية</p>
        </div>

        {/* Referral Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4 text-center">
            <UserPlusIcon className="mx-auto mb-2 text-blue-500" />
            <p className="text-sm text-gray-600">الدعوات المقبولة</p>
            <p className="text-xl font-bold">0</p>
          </Card>
          <Card className="p-4 text-center">
            <GiftIcon className="mx-auto mb-2 text-green-500" />
            <p className="text-sm text-gray-600">النقاط المكتسبة</p>
            <p className="text-xl font-bold">0</p>
          </Card>
        </div>

        {/* Referral Link */}
        <Card className="mb-6">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">رابط الدعوة الخاص بك</h2>
            <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <button
                onClick={handleCopyLink}
                className="text-blue-500 text-sm font-medium whitespace-nowrap"
              >
                {copied ? 'تم النسخ!' : 'نسخ'}
              </button>
            </div>
          </div>
        </Card>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <ShareIcon />
          مشاركة مع الأصدقاء
        </button>

        {/* How it Works */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">كيف يعمل برنامج الدعوة؟</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                1
              </div>
              <p className="text-gray-600">شارك رابط الدعوة الخاص بك مع أصدقائك</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                2
              </div>
              <p className="text-gray-600">عندما يسجل صديقك باستخدام رابطك، سيحصل على 100 نقطة مجانية</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                3
              </div>
              <p className="text-gray-600">ستحصل على 200 نقطة مكافأة لكل صديق يسجل من خلال رابطك</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
