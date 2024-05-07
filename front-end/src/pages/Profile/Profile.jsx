import accountData from "../../data/accountData.json";
import Account from "../../components/Account/Account";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import UserIcon from "../../assets/user-icon.png";
import { updateUserNameAPI } from "../../api/updateUsernameAPI";
import { getUserInfo } from "../../store/userSlice";

const Profile = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [usernameValue, setUsernameValue] = useState("");
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

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
                            <input
                                onChange={(e) =>
                                    setUsernameValue(e.target.value)
                                }
                                type="text"
                                id="username"
                                defaultValue={user.userInfo.userName}
                            />
                        </div>
                        <div className="input-wrapper not-allowed">
                            <label htmlFor="firstname">First name</label>
                            <input
                                type="text"
                                id="firstname"
                                defaultValue={user.userInfo.firstName}
                                readOnly
                                disabled
                            />
                        </div>
                        <div className="input-wrapper not-allowed">
                            <label htmlFor="lastname">Last name</label>
                            <input
                                type="text"
                                id="lastname"
                                defaultValue={user.userInfo.lastName}
                                readOnly
                                disabled
                            />
                        </div>
                        <button
                            className="save-button"
                            onClick={(e) => {
                                updateUserNameAPI(user.token, usernameValue);
                                e.preventDefault();
                                setIsOpened(false);
                                dispatch(getUserInfo(user.token));
                            }}
                        >
                            Save
                        </button>
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
