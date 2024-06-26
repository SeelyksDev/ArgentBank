import { useState, useEffect } from "react";
import UserIcon from "../../assets/user-icon.png";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";

const SignIn = () => {
    useEffect(() => {
        document.title = "ArgentBank - Sign-in";
        return () => {};
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <img
                    src={UserIcon}
                    className="main-user_logo"
                    alt="user logo"
                />
                <h1>Sign In</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="username"
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                        />
                    </div>
                    <div className="input-remember">
                        <label htmlFor="remember-me">Remember me</label>
                        <input
                            onChange={() => {
                                setIsChecked(!isChecked);
                            }}
                            type="checkbox"
                            id="remember-me"
                        />
                    </div>
                    <button
                        className="sign-in-button"
                        onClick={() =>
                            dispatch(
                                loginUser({
                                    email: email,
                                    password: password,
                                    remember: isChecked,
                                })
                            )
                        }
                    >
                        Sign In
                    </button>
                    {user.error ? (
                        <p className="error-msg">{user.error}</p>
                    ) : null}
                </form>
            </section>
        </main>
    );
};

export default SignIn;
