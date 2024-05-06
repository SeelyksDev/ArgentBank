import accountData from "../../data/accountData.json";
import Account from "../../components/Account/Account";
import "./User.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const User = () => {
    const [userName, setUserName] = useState("Tony Jarvis");
    const user = useSelector((state) => state.user);

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.userName}!
                </h1>
                <NavLink to="/change-user-name" className="edit-button">
                    Edit Name
                </NavLink>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountData.map((account, index) => (
                <Account
                    key={index}
                    accountType={account.accountType}
                    amount={account.amount}
                    soldeType={account.soldeType}
                />
            ))}
        </main>
    );
};

export default User;
