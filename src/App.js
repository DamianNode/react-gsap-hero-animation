import 'reset-css';
import './App.scss';

import arrow from './assets/arrow-right.svg';
import imgMan from './assets/image1.webp';
import imgGirl from './assets/image2.webp';

const App = () => {
  return (
    <div className="hero">
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
            <div className="hero-images-inner">
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
