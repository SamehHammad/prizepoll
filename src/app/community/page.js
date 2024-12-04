'use client';

import BackButton from '@/components/BackButton';

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <BackButton />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-right mb-6 mt-8">الجمعية</h1>
        {/* Add community content here */}
      </div>
    </main>
  );
}
