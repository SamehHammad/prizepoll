'use client';

import { useRouter } from 'next/navigation';
import { IoArrowForward } from 'react-icons/io5';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 right-4 z-50 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
      aria-label="رجوع"
    >
      <IoArrowForward className="text-gray-600 w-6 h-6" />
    </button>
  );
}
