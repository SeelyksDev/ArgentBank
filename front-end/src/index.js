import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import SignIn from "./pages/SignIn/SignIn";
import Header from "./components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import ChangeUserName from "./pages/ChangeUserName/ChangeUserName";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
            <Provider store={store}>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/change-user-name" element={<ChangeUserName />} />
            </Routes>
        <Footer />
        </Router>
        </Provider>
    </React.StrictMode>
);
