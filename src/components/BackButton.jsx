'use client';

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors mb-4"
      aria-label="رجوع"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    </button>
  );
};

export default BackButton;
