import { TweenMax, TimelineLite, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';


import 'reset-css';
import './App.scss';

import arrow from './assets/arrow-right.svg';
import imgMan from './assets/image1.webp';
import imgGirl from './assets/image2.webp';

const App = () => {
  const heroRef = useRef(null);
  const imagesRef = useRef(null);
  const tl = new TimelineLite();

  useEffect(() => {
    TweenMax.to(heroRef.current, 0, { visibility: 'visible'})

    const girlImage = imagesRef.current.firstElementChild;
    const manImage = imagesRef.current.lastElementChild;

    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut})
      .from(girlImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut}, .2)
      .from(manImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
      .from(manImage.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut}, .2)
  })

  return (
    <div className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    Relieving the burden
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    of disease caused
                  </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">
                    by behavior.
                  </div>
                </div>
              </h1>
              <p>Better treats serious cardiometabolic diseases to transform lives 
              and reduce healthcare utlization through the use of digital therapeutics.</p>
              <div className="btn-row">
                <button className="btn-explore">
                  explore
                  <div className="icon-arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div className="hero-images-inner" ref={imagesRef}>
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image man">
                <img src={imgMan} alt="man" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
