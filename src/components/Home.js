import "./Home.css";
import homeImage1 from "../assets/home-4.jpg";
import homeImage2 from "../assets/home-3.jpg";
import Navbar from "./Navbar";
import { Outlet, Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page-image-wrapper">
        <div className="home-page-image-overlay" />
        <img
          className="home-page-image"
          src={homeImage1}
          alt="Picture for the Home Page"
        />
        <div className="home-page-text">
          <h1>AVANTIS</h1>
          <p>Your fashion, our responsibility.</p>
        </div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
