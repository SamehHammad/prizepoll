'use client';

import TopNav from '@/components/TopNav';

export default function UserPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-right mb-6">مركز المستخدم</h1>
        {/* Add user center content here */}
      </div>
    </main>
  );
}
