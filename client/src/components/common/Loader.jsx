import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-10 bg-gradient-to-t from-blue-500 to-cyan-300 rounded-full"
            style={{
              animation: `wave 1s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.3); }
        }
      `}</style>
    </div>
  );
};

export default Loader;