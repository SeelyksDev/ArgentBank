import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignIn from "./pages/SignIn/SignIn";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { setToken } from "./store/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUserInfo } from "./store/userSlice";
import { useDispatch } from "react-redux";
import {
    LogedRoutes,
    PrivateRoute,
} from "./components/PrivateRoute/PrivateRoute";

const Main = () => {
    const dispatch = useDispatch();
    const tokenLs = localStorage.getItem("Token");
    if (tokenLs) {
        dispatch(getUserInfo(tokenLs));
        dispatch(setToken(tokenLs));
    }
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route element={<LogedRoutes />}>
                    <Route path="/sign-in" element={<SignIn />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
};
export default Main;
