import accountData from "../../data/accountData.json"
import Account from "../../components/Account/Account"
import "./User.css";
import { useState } from "react";

const User = () => {
    const [userName, setUserName] = useState("Tony Jarvis")
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userName}!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountData.map((account, index) => (
                <Account key={index} accountType={account.accountType} amount={account.amount} soldeType={account.soldeType} />
            ))}
        </main>
    )
};

export default User;
