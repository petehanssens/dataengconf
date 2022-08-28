import React, { useState } from "react";

const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(0);

  return (
    <div className="cursor-pointer w-full justify-center text-4xl">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || rating)
                ? "text-yellow-400 pr-2"
                : "text-white pr-2"
            }
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
