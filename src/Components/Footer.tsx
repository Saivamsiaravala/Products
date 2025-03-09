import { FaCircleInfo } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer-panel">
      <div className="terms-div">
        <div className="terms">Terms and Conditions </div>
        <div className="terms-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          molestiae, maxime quis earum saepe consequuntur, beatae quo quam
          accusantium in facere maiores dolorem quae culpa officia. Temporibus
          amet a iure.
        </div>
      </div>

      <div className="footer-icons">
        <div className="about-icon">
          <FaCircleInfo />
        </div>
        <div className="support-icon">
          <BiSupport />
        </div>
      </div>
    </div>
  );
};

export default Footer;
