import "../assests/css/header.css";
import UpDownArrow from "./../assests/svg/UpDownArrow";

const Header = () => {
  return (
    <header>
      <div className="project-name">
        <span>Small Chops</span>
        <UpDownArrow />
      </div>
    </header>
  );
};

export default Header;
