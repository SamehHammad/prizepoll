const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { Card };
