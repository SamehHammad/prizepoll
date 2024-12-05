'use client';
import { useEffect } from 'react';
import { Card } from '@/components/ui/card';

const adsItems = [
  {
    id: 1,
    title: 'Featured Ad 1',
    description: 'Click to view this advertisement',
  },
  {
    id: 2,
    title: 'Featured Ad 2',
    description: 'Click to view this advertisement',
  },
  {
    id: 3,
    title: 'Featured Ad 3',
    description: 'Click to view this advertisement',
  },
  {
    id: 4,
    title: 'Featured Ad 4',
    description: 'Click to view this advertisement',
  },
];

export default function AdsPage() {
  useEffect(() => {
    try {
      // Load Google AdSense script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('Error loading AdSense:', error);
    }
  }, []);

  const handleAdClick = (adId) => {
    // You can add additional tracking or logic here
    console.log(`Ad ${adId} clicked`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Advertisement Section</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adsItems.map((ad) => (
          <Card
            key={ad.id}
            className="p-4 cursor-pointer hover:shadow-lg transition-all duration-300"
            onClick={() => handleAdClick(ad.id)}
          >
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{ad.title}</h2>
              <p className="text-gray-600">{ad.description}</p>
              {/* Google AdSense Ad Unit */}
              <div className="mt-4">
                <ins
                  className="adsbygoogle"
                  style={{ display: 'block' }}
                  data-ad-client="YOUR_AD_CLIENT_ID"
                  data-ad-slot="YOUR_AD_SLOT_ID"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
