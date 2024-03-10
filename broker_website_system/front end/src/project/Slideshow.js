import React, { useState, useEffect } from 'react';
import b from './image/house3.jpg';
import c from './image/mobile1.PNG'
import a from './image/house.jpg'
import './slideshow.css'
const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }

        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[newIndex - 1].style.display = "block";
        dots[newIndex - 1].className += " active";

        return newIndex;
      });
    };

    const slideshowInterval = setInterval(showSlides, 5000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [slideIndex]);

  return (
    <div>

      <div className="slideshow-container">
    

        <div className="mySlides fade">
          
          <img class='imgg' src={a} style={{ width: '400',height:'400px' }} alt="Caption Text 1" />
          <div className="text">Buy now</div>
        </div>

        <div className="mySlides fade">
          <img  class='imgg' src={b} style={{ width: '400px',height:'400px' }} alt="Caption Two" />
          <div className="text">buy now</div>
        </div>

        <div className="mySlides fade">
          <img class='imgg' src={c} style={{ width: '400px',height:'400px' }} alt="Caption Three" />
          <div className="text">buy now</div>
        </div>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Slideshow;
