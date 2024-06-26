import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import UserIcon from "../../assets/user-icon.png";
import arrowFromBracket from "../../assets/arrow-right-from-bracket.png";
import ArgentBankLogo from "../../assets/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../store/userSlice";

const Header = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispatch(userLogout());
        navigate("/");
    };

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
                    {user.token ? (
                        <ul className="user-nav">
                            <NavLink to="/profile" className="main-nav-item">
                                <img
                                    src={UserIcon}
                                    className="main-user_logo"
                                    alt="user logo"
                                />
                                {user.userInfo.userName}
                            </NavLink>

                            <li
                                onClick={() => logout()}
                                className="button-logout"
                            >
                                <img
                                    src={arrowFromBracket}
                                    alt="arrow from bracket"
                                    className="arrowLogout"
                                />
                                Sign Out
                            </li>
                        </ul>
                    ) : (
                        <NavLink to="/sign-in" className="main-nav-item">
                            <img
                                src={UserIcon}
                                className="main-user_logo"
                                alt="user logo"
                            />
                            Sign In
                        </NavLink>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
