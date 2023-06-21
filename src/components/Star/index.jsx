import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState } from "react";

import { BtnStar } from "./styles";

export function Star(){
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return(
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <BtnStar
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star"> &#9733;</span>
          </BtnStar>
        );
      })}
    </div>
  );
}
