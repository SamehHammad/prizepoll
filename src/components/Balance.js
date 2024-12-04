'use client';

import React from 'react';

export default function Balance() {
  return (
    <div className="p-6 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl shadow-lg space-y-6">
      
      {/* Main Balance Card */}
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 text-right">التوازن</h2>
          <span className="text-sm text-gray-600 font-medium">1112967597</span>
        </div>
        <p className="text-3xl font-bold text-gray-900 mb-6 text-right">E£204.00</p>
        
        {/* Balance details */}
        <div className="grid grid-cols-2 gap-6">
          {/* Today’s income */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">دخل اليوم</span>
            </div>
            <span className="text-xl font-semibold text-right text-gray-900">E£0</span>
          </div>
          
          {/* Frozen balance */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span className="text-sm text-gray-600">مجمد</span>
            </div>
            <span className="text-xl font-semibold text-right text-gray-900">E£0.00</span>
          </div>
        </div>
      </div>

    </div>
  );
}
