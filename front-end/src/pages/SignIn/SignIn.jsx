import { useState } from "react";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const userData = {
        name: "data",
        userName: "azerty",
    };
    const navigate = useNavigate();

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        navigate("/user");
                    }}
                >
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
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
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button
                        className="sign-in-button"
                        onClick={() =>
                            dispatch(
                                loginUser({ email: email, password: password })
                            )
                        }
                    >
                        Sign In
                    </button>
                </form>
            </section>
        </main>
    );
};

export default SignIn;
