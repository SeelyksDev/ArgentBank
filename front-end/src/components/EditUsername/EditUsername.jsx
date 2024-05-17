import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUserNameAPI } from "../../api/updateUsernameAPI";
import { getUserInfo } from "../../store/userSlice";
import UserIcon from "../../assets/user-icon.png";
import "./EditUsername.css";

const EditUsername = ({ isOpened }) => {
    const [usernameValue, setUsernameValue] = useState("");
    const [formError, setFormError] = useState(null);
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const updateUsername = async (e) => {
        e.preventDefault();
        const { error } = await updateUserNameAPI(user.token, usernameValue);
        if (error) {
            setFormError(error);
        } else {
            isOpened(false);
            dispatch(getUserInfo(user.token));
        }
    };

    return (
        <section className="update-username-content">
            <img src={UserIcon} className="main-user_logo" alt="user logo" />
            <h1>Edit user info</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">User name</label>
                    <input
                        onChange={(e) => setUsernameValue(e.target.value)}
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
                    disabled={usernameValue === ""}
                    onClick={(e) => {
                        updateUsername(e);
                    }}
                >
                    Save
                </button>
                <button
                    onClick={() => isOpened(false)}
                    className="cancel-button"
                >
                    Cancel
                </button>
                {formError ? (
                    <p className="error-edit-msg">{formError}</p>
                ) : null}
            </form>
        </section>
    );
};

export default EditUsername;
