import React from "react";
import "../styles/recent.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const RecentWork = () => {
  return (
    <div className="recentContainer">
      <h2 className="recentTitle">Portfolio</h2>
      <hr />
      <div className="recentInfo">
        <p className="recentText">
          I will show you some small projects that I have developed, they are on
          Github and I have made them applying the knowledge that I had obtained
          until the moment of their creation. (Click on the tag)
        </p>
        <div className="carouselContainer">
          <Carousel
            emulateTouch={true}
            width={900}
            infiniteLoop={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            autoPlay={true}>
            <div>
              <img
                src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
                alt="image1"
                className="sliderImg"
              />
              <a
                href="https://github.com/BolsitaDP/fitnessapp"
                className="sliderLink"
                target="_blank"
                rel="noreferrer">
                <p className="legend">Fitness App</p>
              </a>
            </div>
            <div>
              <img
                src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
                alt="image2"
                className="sliderImg"
              />
              <a
                href="https://github.com/BolsitaDP/PaginaPeliculas"
                className="sliderLink"
                target="_blank"
                rel="noreferrer">
                <p className="legend">Movies App</p>
              </a>
            </div>
            <div>
              <img
                src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png"
                alt="image3"
                className="sliderImg"
              />
              <a
                href="https://github.com/BolsitaDP/nextjs-1-github-store"
                className="sliderLink"
                target="_blank"
                rel="noreferrer">
                <p className="legend">Next.js Shop</p>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
