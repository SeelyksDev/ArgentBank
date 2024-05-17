import accountData from "../../data/accountData.json";
import Account from "../../components/Account/Account";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditUsername from "../../components/EditUsername/EditUsername";
import "./Profile.css";

const Profile = () => {
    useEffect(() => {
        document.title = "ArgentBank - Profile";
        return () => {};
    }, []);

    const [isOpened, setIsOpened] = useState(false);

    const user = useSelector((state) => state.user);

    return (
        <main className="main bg-dark">
            {isOpened ? (
                <EditUsername isOpened={setIsOpened} />
            ) : (
                <div className="header">
                    <h1>
                        Welcome back
                        <br />
                        {user.userInfo.userName}!
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
