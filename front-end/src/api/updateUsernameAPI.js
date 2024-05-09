export const updateUserNameAPI = async (token, newUserName) => {
    if (newUserName === "") {
        return { error: "invalid new user name" };
    }
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userName: newUserName,
                }),
            }
        );
        const responseJson = response.json();
        if (responseJson.status === 400) {
            throw new Error(responseJson.message);
        } else if (responseJson.status === 500) {
            throw new Error(responseJson.message);
        } else {
            return { error: null };
        }
    } catch (err) {
        const error = err.message;
        return { error };
    }
};
