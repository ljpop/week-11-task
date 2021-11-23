import "./Header.css";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/image-avatar.jpg";
import Moon from "../../assets/icon-moon.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="logo-img header-item">
        {" "}
        <Link to="/" className="logo-link">
          <img className="logo-img-circle" src={Logo} alt="" />{" "}
        </Link>
        <div className="logo-img-down"></div>
      </div>
      <div className="header-item">
        <div className="light-mode">
          <img
            className="light-img"
            src={Moon}
            alt=""
            onClick={(e) => {
              dispatch({ type: "TOGGLE_THEME" });
            }}
          />
        </div>
        <div className="user-img">
          <img className="user-img-avatar" src={Avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
