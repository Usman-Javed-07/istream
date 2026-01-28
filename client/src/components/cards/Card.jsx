import React from "react";
import { Star } from "lucide-react";

function Card() {
  const rating = 2;
  const year = 2026;
  return (
    <>
      <div className="bg-white/20 backdrop-blur-md pb-4">
        <img
          className="w-full h-auto object-cover"
          src="/Lupin.webp"
          alt="Lupin"
        />
        <h1 className="pt-4 p-2 sm:px-4 text-xs md:text-base">
          Lupin The Gentleman Thief
        </h1>
        <div className="flex gap-1 px-2 sm:px-4 justify-between items-center">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={14}
                className={`${star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>

          <span className="text-xs text-red-400">( {year} )</span>
        </div>
      </div>
    </>
  );
}

export default Card;
