import StoreLogo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-core">
        <div className="store-box">
          <Link to="/">
            <img src={StoreLogo} alt="store logo" />
          </Link>
        </div>
        <div className="links-box">
          <div className="navigation">
            <h4>Terms and conditions</h4>
            <div className="links">
              <Link to="/">Terms & Conditions</Link>
              <Link to="/">Return Policy</Link>
              <Link to="/">Privacy Policy</Link>
            </div>
          </div>
          <div className="navigation">
            <h4>About the store</h4>
            <div className="links">
              <Link to="/">About us</Link>
              <Link to="/">How to pay</Link>
              <Link to="/">Shipping & Delivery</Link>
            </div>
          </div>
          <div className="navigation">
            <h4>Contact</h4>
            <div className="links">
              <Link to="/">Contact us</Link>
              <Link to="/">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyrights">Made with ♥ by YouCan</div>
    </footer>
  );
}
