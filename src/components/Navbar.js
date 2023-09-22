import "./Navbar.css";
import shoppingCartIcon from "../assets/shopping-cart.png";
import navbarButtonIcon from "../assets/navbar-button.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-buttons-wrapper">
        <div className="navbar-image-wrapper">
          <img src={shoppingCartIcon} alt="Shopping Cart Icon" />
        </div>
        <div className="navbar-image-wrapper">
          <img src={navbarButtonIcon} alt="Menu Button Icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
