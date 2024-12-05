const Card = ({ className = '', children }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export { Card };
