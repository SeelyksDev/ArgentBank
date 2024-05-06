export const login = async (userId) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userId.email,
            password: userId.password,
        }),
    });
    const responseJson = await response.json();
    const token = responseJson.body.token;
    return token;
};
