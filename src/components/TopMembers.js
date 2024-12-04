'use client';

import { useEffect, useRef } from 'react';

export default function TopMembers() {
  const scrollRef = useRef(null);

  const members = [
    { id: 1, code: 'zz****N', amount: 'E£62074.99' },
    { id: 2, code: 'zz****Z', amount: 'E£42908.29' },
    { id: 3, code: '7b****1', amount: 'E£87128.77' },
    { id: 4, code: 'dP****P', amount: 'E£53580.37' },
    { id: 5, code: 'C****O8', amount: 'E£27230.81' },
    { id: 6, code: 'C****O8', amount: 'E£27230.81' },
    { id: 7, code: 'C****O8', amount: 'E£27230.81' },
    { id: 8, code: 'C****O8', amount: 'E£27230.81' },
    { id: 9, code: 'C****O8', amount: 'E£27230.81' },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
        scrollContainer.scrollTop = 0;
      } else {
        scrollContainer.scrollTop += 1;
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white rounded-lg overflow-hidden mx-2 sm:mx-4 my-2 sm:my-4 shadow-lg">
      <h3 className="text-base sm:text-lg font-semibold p-3 sm:p-4 bg-orange-400 text-white text-center">
        أخبار الأعضاء
      </h3>
      <div
        ref={scrollRef}
        className="h-[300px] overflow-hidden scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <div className="divide-y divide-gray-200">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between px-4 py-3"
            >
              {/* Avatar and Details */}
              <div className="flex items-center gap-3">
                <img
                  src={`/zz.jpg`}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full border-2 border-orange-400"
                />
                <div>
                  <span className="block text-sm sm:text-base font-medium text-gray-800">
                    {member.code}
                  </span>
                  <span className="block text-xs text-gray-500">العضوية</span>
                </div>
              </div>
              {/* Amount */}
              <span className="text-sm sm:text-base font-bold text-orange-500">
                {member.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
