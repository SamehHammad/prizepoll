'use client';

import Image from 'next/image';

export default function Partners() {
  
  const partners = [
    { id: 1, name: 'Lazada', logo: '/partners/lazada.png' },
    { id: 2, name: 'OLX', logo: '/partners/olx.png' },
    { id: 3, name: 'TikTok Shop', logo: '/partners/tiktok.png' },
    { id: 4, name: 'Shopee', logo: '/partners/shopee.png' },
    { id: 5, name: 'Alibaba', logo: '/partners/alibaba.png' },
    { id: 6, name: 'Amazon', logo: '/partners/amazon.png' },
    { id: 7, name: 'Ria', logo: '/partners/ria.png' },
    { id: 8, name: 'Rozetka', logo: '/partners/rozetka.png' },
    { id: 9, name: 'Facebook', logo: '/partners/facebook.png' },
  ];

  return (
    <div className="bg-white rounded-lg p-3 sm:p-4 mx-2 sm:mx-4 my-2 sm:my-4">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-900">الشريك</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
        {partners.map((partner) => (
          <div 
            key={partner.id}
            className="aspect-[3/2] relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-2 flex items-center justify-center"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={100}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
