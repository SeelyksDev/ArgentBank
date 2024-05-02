import "./Header.css";
import { NavLink } from "react-router-dom";
import UserIcon from "../../assets/user-icon.png";
import ArgentBankLogo from "../../assets/argentBankLogo.png";

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={ArgentBankLogo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink to="/sign-in" className="main-nav-item">
                        <img
                            src={UserIcon}
                            className="main-user_logo"
                            alt="user logo"
                        />
                        Sign In
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
