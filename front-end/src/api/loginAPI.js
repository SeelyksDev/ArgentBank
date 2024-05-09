export const loginAPI = async (userId) => {
    try {
        const response = await fetch(
            "http://localhost:3001/api/v1/user/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: userId.email,
                    password: userId.password,
                }),
            }
        );
        const responseJson = await response.json();
        if (responseJson.status === 400) {
            throw new Error(responseJson.message);
        } else if (responseJson.status === 500) {
            throw new Error(responseJson.message);
        } else {
            const token = responseJson.body.token;
            return { token, error: null };
        }
    } catch (err) {
        const error = err.message;
        return { error, token: null };
    }
};
