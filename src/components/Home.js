import "./Home.css";
import homeImage1 from "../assets/home-4.jpg";
import homeImage2 from "../assets/home-3.jpg";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function Home() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [homeImage1, homeImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((previousIndex) => (previousIndex + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeHandler = (e) =>
    setImageIndex(Number(e.target.id.split("-")[1]) - 1);

  return (
    <div className="home-page">
      <div className="home-page-image-wrapper">
        <div className="home-page-image-overlay" />
        <img
          className="home-page-image"
          src={images[imageIndex]}
          alt="Picture for the Home Page"
        />
        <div className="home-page-text">
          <h1>AVANTIS</h1>
          <p>Your fashion, our responsibility.</p>
        </div>
        <div className="image-slider-buttons">
          <div className="image-slider-buttons-centered">
            <input
              type="radio"
              name="image_slider"
              id="image-1-button"
              checked={imageIndex === 0}
              onChange={(e) => changeHandler(e)}
            />
            <input
              type="radio"
              name="image_slider"
              id="image-2-button"
              checked={imageIndex === 1}
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Home;
