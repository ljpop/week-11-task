import "./Header.css";
import Logo from "../../assets/logo.svg";
import Avatar from "../../assets/image-avatar.jpg";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

const Header = ({ darkTheme }) => {
  const dispatch = useDispatch();
  // console.log(darkTheme);
  let icon = Moon;
  if (darkTheme) icon = Sun;

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
            src={icon}
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

const mapStateToProps = (state) => {
  return {
    darkTheme: state.darkTheme,
  };
};
export default connect(mapStateToProps)(Header);
