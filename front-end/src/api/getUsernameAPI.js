export const getUserInfoAPI = async (token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const responseJson = await response.json();
    const { userName, lastName, firstName } = responseJson.body;
    return { userName, lastName, firstName };
};
