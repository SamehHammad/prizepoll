import React from 'react';

const UserProfile = () => {
  // Assume user data is fetched from an API or state management
  const userData = {
    name: 'same7hammad',
    id: '1112967597',
    usdt: '1,000.00',
    'رصيد المحفظة': '500.00',
    'حساب الأمان': 'عربي',
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-800 rounded-full mr-4"></div>
        <div>
          <h2 className="text-xl font-bold">{userData.name}</h2>
          <p className="text-gray-400">{userData.id}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 mb-1">USDT</p>
          <p className="text-lg font-bold">{userData.usdt}</p>
        </div>
        <div>
          <p className="text-gray-400 mb-1">رصيد المحفظة</p>
          <p className="text-lg font-bold">{userData['رصيد المحفظة']}</p>
        </div>
        <div>
          <p className="text-gray-400 mb-1">حساب الأمان</p>
          <p className="text-lg font-bold">{userData['حساب الأمان']}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;