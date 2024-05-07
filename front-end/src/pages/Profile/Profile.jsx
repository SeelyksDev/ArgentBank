import accountData from "../../data/accountData.json";
import Account from "../../components/Account/Account";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.css";
import UserIcon from "../../assets/user-icon.png";

const Profile = () => {
    const [userName, setUserName] = useState("Tony Jarvis");
    const [isOpened, setIsOpened] = useState(false);
    const user = useSelector((state) => state.user);

    return (
        <main className="main bg-dark">
            {isOpened ? (
                <section className="update-username-content">
                    <img
                        src={UserIcon}
                        className="main-user_logo"
                        alt="user logo"
                    />
                    <h1>Edit user info</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">User name</label>
                            <input type="text" id="username" />
                        </div>
                        <div className="input-wrapper not-allowed">
                            <label htmlFor="firstname">First name</label>
                            <input
                                type="text"
                                id="firstname"
                                readOnly
                                disabled
                            />
                        </div>
                        <div className="input-wrapper not-allowed">
                            <label htmlFor="lastname">Last name</label>
                            <input
                                type="text"
                                id="lastname"
                                readOnly
                                disabled
                            />
                        </div>
                        <button className="save-button">Save</button>
                        <button
                            onClick={() => setIsOpened(false)}
                            className="cancel-button"
                        >
                            Cancel
                        </button>
                    </form>
                </section>
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {user.userName}!
                    </h1>
                    <button
                        onClick={() => setIsOpened(true)}
                        className="edit-button"
                    >
                        Edit Name
                    </button>
                </div>
            )}
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

export default Profile;
