import React from 'react';

export default function VIPTiers() {
  const tiers = [
    {
      id: 'VIP1',
      price: 'E£180.00',
      type: 'المستوي الحالي',
      color: 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]'
    },
    {
      id: 'VIP2',
      price: 'E£300.00',
      type: 'إنضم',
      color: 'bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]'
    },
    {
      id: 'VIP3',
      price: 'E£700.00',
      type: 'إنضم',
      color: 'bg-gradient-to-r from-[#059669] to-[#34d399]'
    },
    {
      id: 'VIP4',
      price: 'E£1500.00',
      type: 'إنضم',
      color: 'bg-gradient-to-r from-[#312e81] to-[#4338ca]'
    },
    {
      id: 'VIP5',
      price: 'E£3000.00',
      type: 'إنضم',
      color: 'bg-gradient-to-r from-[#1f2937] to-[#4b5563]'
    },
    {
      id: 'VIP6',
      price: 'E£10000.00',
      type: 'إنضم',
      color: 'bg-gradient-to-r from-[#7e22ce] to-[#a855f7]'
    }
  ];

  return (
    <div className="p-4 bg-orange-400 min-h-screen">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-4 px-2">منطقة المستوى</h2>
      <div className="space-y-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`p-4 flex justify-between items-center text-white shadow-lg rounded-lg ${tier.color}`}
          >
            <div className="flex flex-col items-start">
              <span className="text-xl font-bold">{tier.id}</span>
              <span className="text-lg">{tier.price}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-lg">{tier.type}</span>
              <div className="relative w-[100px] h-[40px] opacity-20">
                <img
                  src="/vip-logo.png"
                  alt="VIP"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}