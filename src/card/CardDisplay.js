import CardContents from "./CardContents.js";
import "./card.css";
import { useState } from "react";
const CardDisplay = () => {
  const [currentProfile, setCurrentProfile] = useState(2);

  const nextSlideHandle = () => {
    if (currentProfile > 1) {
      setCurrentProfile(2);
    } else {
      setCurrentProfile(currentProfile + 1);
    }
  };

  const prevSlideHandle = () => {
    if (currentProfile < 1) {
      setCurrentProfile(0);
    } else {
      setCurrentProfile(currentProfile - 1);
    }
  };
  return (
    <div className="card-container">
      <p className="previous-slide" onClick={prevSlideHandle}>
        &lt;
      </p>
      <CardContents
        currentProfile={currentProfile}
        nextSlide={nextSlideHandle}
        prevSlide={prevSlideHandle}
      />
      <p className="next-slide" onClick={nextSlideHandle}>
        &gt;
      </p>
    </div>
  );
};

export default CardDisplay;
