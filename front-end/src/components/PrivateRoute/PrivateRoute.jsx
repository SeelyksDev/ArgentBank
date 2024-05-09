import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = () => {
    const token = useSelector((state) => state.user.token);

    return token ? <Outlet /> : <Navigate to="/sign-in" />;
};

export const LogedRoutes = () => {
    const token = useSelector((state) => state.user.token);

    return token ? <Navigate to="/profile" /> : <Outlet />;
};
