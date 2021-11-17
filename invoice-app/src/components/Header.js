import './Header.css';
import Logo from "./assets/logo.svg";
import Avatar from "./assets/image-avatar.jpg";
import Moon from "./assets/icon-moon.svg";



const Header = () => {
    return (
        <div className='header'>
            <div className='logo-img header-item'>            <img className='logo-img-circle'
              src={Logo}/>
            <div className='logo-img-down'></div>
            </div>
            <div className='header-item'>
            <div className='light-mode'><img className='light-img'
              src={Moon}/></div>
            <div className='user-img'><img className='user-img-avatar'
              src={Avatar}/></div>
              </div>
        </div>
    )
}

export default Header
