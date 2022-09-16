import "../assests/css/header.css";
import upDownArrown from "../assests/images/updown-arrow.svg";

const Header = () => {
  return (
    <header>
      <div className="project-name">
        <span>Small Chops</span>
        <img src={upDownArrown} alt="arrow" />
      </div>
    </header>
  );
};

export default Header;
