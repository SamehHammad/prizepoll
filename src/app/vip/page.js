'use client';

import BackButton from '@/components/BackButton';
import Balance from '@/components/Balance';
import VIPTiers from '@/components/VIPTiers';
import TopMembers from '@/components/TopMembers';
import Partners from '@/components/Partners';
import Slider from '@/components/Slider';
import TopNav from '@/components/TopNav';

export default function VIPPage() {
  const vipTiers = [
    { id: 1, name: 'VIP1', price: 180.00, type: 'شهري', color: 'bg-gradient-to-r from-blue-800 to-blue-600' },
    { id: 2, name: 'VIP2', price: 300.00, type: 'شهري', color: 'bg-gradient-to-r from-blue-700 to-blue-500' },
    { id: 3, name: 'VIP3', price: 700.00, type: 'شهري', color: 'bg-gradient-to-r from-emerald-500 to-teal-400' },
    { id: 4, name: 'VIP4', price: 1500.00, type: 'شهري', color: 'bg-gradient-to-r from-blue-700 to-indigo-600' },
    { id: 5, name: 'VIP5', price: 3000.00, type: 'شهري', color: 'bg-gradient-to-r from-gray-800 to-gray-600' },
    { id: 6, name: 'VIP6', price: 10000.00, type: 'شهري', color: 'bg-gradient-to-r from-purple-700 to-purple-500' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <BackButton />
      <Slider />
      <TopNav />
      <div className="container mx-auto px-4">
        <Balance />
        <VIPTiers tiers={vipTiers} />
        <TopMembers />
        <Partners />
      </div>
    </main>
  );
}
